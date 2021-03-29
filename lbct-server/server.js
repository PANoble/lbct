const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 7100 });

const users = [];

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on('connection', (ws) => {
  let index;
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case 'ADD_USER': {
        index = users.length;
        users.push({ name: data.name, userColor: data.color, userAvatar: data.avatar, id: index + 1 });
        ws.send(
          JSON.stringify({
            type: 'USERS_LIST',
            users,
          })
        );
        broadcast(
          {
            type: 'USERS_LIST',
            users,
          },
          ws
        );
        break;
      }
      case 'ADD_MESSAGE': {
        broadcast(
          {
            type: 'ADD_MESSAGE',
            message: data.message,
            author: data.author,
            authorColor: data.authorColor,
            authorAvatar: data.authorAvatar,
            isPublic: data.isPublic,
          },
          ws
        );
        break;
      }
      default:
        break;
    }
  });

  ws.on('close', () => {
    users.splice(index, 1);
    broadcast(
      {
        type: 'USERS_LIST',
        users,
      },
      ws
    );
  });
});
