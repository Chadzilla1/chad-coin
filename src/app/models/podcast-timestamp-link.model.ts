export class PodcastTimestampLink {
    timestamp: number;
    description: string;

    constructor(value: any) {
        this.timestamp = value[0];
        this.description = value[1];
    }
}