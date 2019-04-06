import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import * as Twitter from 'twit';

//import { Message } from './model';

const client = new Twitter({
    consumer_key: '8DFGSy88YIYkb94AZ7owKpeQA',
    consumer_secret: 'PDE17XBzhSxYPj4aqu2JPsGxOU0UEQZ4GmGg1q5yujUbvRHz2r',
    access_token: '251807042-0vR3QTAnUeNks3818tfGbJLB16QJmUMqya6mOUX2',
    access_token_secret: 'hjTtfkOYORLFlBZBqDOoMWt27GEXofLUfH8TNKruRUwM2'
  });

export class ChatServer {
    public static readonly PORT:number = 8080;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;
    private stream;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || ChatServer.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);
           /*  socket.on('message', (m: Message) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            }); */
            const params = { track: 'giant bomb' };
            console.log(params);

            this.stream = client.stream('statuses/filter', params);

            this.stream.on('tweet', function (tweet) {
                console.log(JSON.stringify(tweet));
                this.io.emit('message', JSON.stringify(tweet));
              });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
                this.stream.stop();
                console.log('Stopped stream');
            });
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}