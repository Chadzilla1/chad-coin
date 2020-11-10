import { PodcastTimestampLink } from './podcast-timestamp-link.model';

export class PodcastTimestamp {
    title: string;
    link: string;
    timestamps: string;
    parsedTimestamps: PodcastTimestampLink[];

    constructor(value: any) {
        this.title = value[0];
        this.link = value[1];
        this.timestamps = value[2];
        this.parsedTimestamps = value[3];
    }
}