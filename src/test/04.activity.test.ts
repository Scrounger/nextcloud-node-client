import { expect } from "chai";
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import "mocha";
import {
    NCClient,
    NCFile,
    NCFolder,
} from "../ncClient";

// tslint:disable-next-line:only-arrow-functions
describe("NEXCLOUD-NODE-CLIENT-ACTIVITY", function() {
    this.timeout(1 * 60 * 1000);

    it("1 get activity", async () => {

        const client = await NCClient.clientFactory();

        const activities = client.getActivities();
        expect(activities, "expect no exception").to.be.equal(false);

    });

    it("99 delete directory", async () => {

        const client = await NCClient.clientFactory();

        const dirName = "/test";

        let baseDir: NCFolder | null = await client.createFolder(dirName);
        if (baseDir) {
            await baseDir.delete();
        }
        baseDir = await client.getFolder(dirName);
        expect(baseDir, "expect directory to be null").to.be.equal(null);
    });
});