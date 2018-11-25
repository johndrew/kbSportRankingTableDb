const {
    strictEqual,
} = require('assert');
const {
    durations,
    eventTypes,
    genders,
    kettlebellWeights,
    rankings,
    weightClasses,
} = require('../../shared/enums');
const {
    getRankingLocal,
    testError,
} = require('./util/getRankingUtil');

describe(__filename, () => {
    let params;
    beforeEach(() => {
        params = {
            gender: genders.WOMEN,
            eventType: eventTypes.SNATCH,
            duration: durations.TEN,
            kettlebellWeight: kettlebellWeights.TWENTYFOUR,
        };
    });

    describe('Positive Tests', () => {
        const timeout = 4000;
        describe(weightClasses.STRAWWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.STRAWWEIGHT;
            });

            it('returns MSIC for repetitions greater than or equal to 104', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    130, 125, 120, 115, 110,
                    108, 107, 106, 105, 104,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MSIC;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns MS for repetitions less than 104 and greater than or equal to 74', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    103, 102, 101, 100,
                    99, 98, 97, 96, 95, 94, 93, 92, 91, 90,
                    89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
                    79, 78, 77, 76, 75, 74,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns CMS for repetitions less than 74 and greater than or equal to 59', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    73, 72, 71, 70,
                    69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
                    59,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns Rank I for repetitions less than 59 and greater than or equal to 47', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    58, 57, 56, 55, 54, 53, 52, 51, 50,
                    49, 48, 47,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });

        describe(weightClasses.FLYWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.FLYWEIGHT;
            });

            it('returns MSIC for repetitions greater than or equal to 111', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    140, 135, 130, 125, 120,
                    115, 114, 113, 112, 111,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MSIC;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns MS for repetitions less than 111 and greater than or equal to 83', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    110,
                    109, 108, 107, 106, 105, 104, 103, 102, 101, 100,
                    99, 98, 97, 96, 95, 94, 93, 92, 91, 90,
                    89, 88, 87, 86, 85, 84, 83,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns CMS for repetitions less than 83 and greater than or equal to 66', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    82, 81, 80,
                    79, 78, 77, 76, 75, 74, 73, 72, 71, 70,
                    69, 68, 67, 66,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns Rank I for repetitions less than 66 and greater than or equal to 53', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    65, 64, 63, 62, 61, 60,
                    59, 58, 57, 56, 55, 54, 53,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });

        describe(weightClasses.BANTAMWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.BANTAMWEIGHT;
            });

            it('returns MSIC for repetitions greater than or equal to 120', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    150, 145, 140, 135, 130,
                    125, 124, 123, 122, 121, 120,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MSIC;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns MS for repetitions less than 120 and greater than or equal to 93', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    119, 118, 117, 116, 115, 114, 113, 112, 111, 110,
                    109, 108, 107, 106, 105, 104, 103, 102, 101, 100,
                    99, 98, 97, 96, 95, 94, 93,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns CMS for repetitions less than 93 and greater than or equal to 74', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    92, 91, 90,
                    89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
                    79, 78, 77, 76, 75, 74,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns Rank I for repetitions less than 74 and greater than or equal to 60', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    73, 72, 71, 70,
                    69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });

        describe(weightClasses.FEATHERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.FEATHERWEIGHT;
            });

            it('returns MSIC for repetitions greater than or equal to 129', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    150, 145, 140, 135, 134,
                    133, 132, 131, 130, 129,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MSIC;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns MS for repetitions less than 129 and greater than or equal to 103', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    128, 127, 126, 125, 124, 123, 122, 121, 120,
                    119, 118, 117, 116, 115, 114, 113, 112, 111, 110,
                    109, 108, 107, 106, 105, 104, 103,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns CMS for repetitions less than 103 and greater than or equal to 83', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    102, 101, 100,
                    99, 98, 97, 96, 95, 94, 93, 92, 91, 90,
                    89, 88, 87, 86, 85, 84, 83,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns Rank I for repetitions less than 83 and greater than or equal to 66', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    82, 81, 80,
                    79, 78, 77, 76, 75, 74, 73, 72, 71, 70,
                    69, 68, 67, 66,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });

        describe(weightClasses.LIGHTWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.LIGHTWEIGHT;
            });

            it('returns MSIC for repetitions greater than or equal to 138', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    160, 155, 150, 145,
                    140, 139, 138,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MSIC;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns MS for repetitions less than 138 and greater than or equal to 113', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    137, 136, 135, 134, 133, 132, 131, 130,
                    129, 128, 127, 126, 125, 124, 123, 122, 121, 120,
                    119, 118, 117, 116, 115, 114, 113,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns CMS for repetitions less than 113 and greater than or equal to 92', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    112, 111, 110,
                    109, 108, 107, 106, 105, 104, 103, 102, 101, 100,
                    99, 98, 97, 96, 95, 94, 93, 92,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns Rank I for repetitions less than 92 and greater than or equal to 73', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    91, 90,
                    89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
                    79, 78, 77, 76, 75, 74, 73,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });

        describe(weightClasses.SUPER_LIGHTWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_LIGHTWEIGHT;
            });

            it('returns MSIC for repetitions greater than or equal to 147', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    165, 160, 155,
                    150, 149, 148, 147,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MSIC;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns MS for repetitions less than 147 and greater than or equal to 123', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    146, 145, 144, 143, 142, 141, 140,
                    139, 138, 137, 136, 135, 134, 133, 132, 131, 130,
                    129, 128, 127, 126, 125, 124, 123,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns CMS for repetitions less than 123 and greater than or equal to 100', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    122, 121, 120,
                    119, 118, 117, 116, 115, 114, 113, 112, 111, 110,
                    109, 108, 107, 106, 105, 104, 103, 102, 101, 100,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns Rank I for repetitions less than 100 and greater than or equal to 79', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    99, 98, 97, 96, 95, 94, 93, 92, 91, 90,
                    89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
                    79,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });

        describe(weightClasses.WELTERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.WELTERWEIGHT;
            });

            it('returns MSIC for repetitions greater than or equal to 157', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    170, 165,
                    160, 159, 158, 157,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MSIC;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns MS for repetitions less than 157 and greater than or equal to 132', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    156, 155, 154, 153, 152, 151, 150,
                    149, 148, 147, 146, 145, 144, 143, 142, 141, 140,
                    139, 138, 137, 136, 135, 134, 133, 132,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns CMS for repetitions less than 132 and greater than or equal to 107', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    131, 130,
                    129, 128, 127, 126, 125, 124, 123, 122, 121, 120,
                    119, 118, 117, 116, 115, 114, 113, 112, 111, 110,
                    109, 108, 107,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns Rank I for repetitions less than 107 and greater than or equal to 85', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    106, 105, 104, 103, 102, 101, 100,
                    99, 98, 97, 96, 95, 94, 93, 92, 91, 90,
                    89, 88, 87, 86, 85,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });

        describe(weightClasses.SUPER_WELTERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_WELTERWEIGHT;
            });

            it('returns MSIC for repetitions greater than or equal to 168', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    190, 185, 180,
                    175, 174, 173, 172, 171, 170, 169,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MSIC;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns MS for repetitions less than 168 and greater than or equal to 141', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    167, 166, 165, 164, 163, 162, 161, 160,
                    159, 158, 157, 156, 155, 154, 153, 152, 151, 150,
                    149, 148, 147, 146, 145, 144, 143, 142, 141,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.MS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns CMS for repetitions less than 141 and greater than or equal to 114', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    140,
                    139, 138, 137, 136, 135, 134, 133, 132, 131, 130,
                    129, 128, 127, 126, 125, 124, 123, 122, 121, 120,
                    119, 118, 117, 116, 115, 114,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });

            it('returns Rank I for repetitions less than 114 and greater than or equal to 91', async function i() {
                this.timeout(timeout);

                const testRepetitions = [
                    113, 112, 111, 110,
                    109, 108, 107, 106, 105, 104, 103, 102, 101, 100,
                    99, 98, 97, 96, 95, 94, 93, 92, 91,
                ];

                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));

                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
    });

    describe('Negative Tests', () => {
        const timeout = 4000;

        describe(weightClasses.STRAWWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.STRAWWEIGHT;
            });

            it('returns 404 for repetitions less than 47', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                    46, 45, 44, 43, 42, 41, 40,
                    30, 20, 10, 5, 1,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 404));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
              });
        });

        describe(weightClasses.FLYWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.FLYWEIGHT;
            });

            it('returns 404 for repetitions less than 53', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                    52, 51, 50,
                    45, 40, 30, 20, 10, 5, 1,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 404));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
              });
        });

        describe(weightClasses.BANTAMWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.BANTAMWEIGHT;
            });

            it('returns 404 for repetitions less than 60', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                  59, 58, 57, 56, 55,
                  50, 40, 30, 20, 10, 5, 1,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 404));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
              });
        });

        describe(weightClasses.FEATHERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.FEATHERWEIGHT;
            });

            it('returns 404 for repetitions less than 66', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                  65, 64, 63, 62, 61, 60,
                  55, 50, 40, 30, 20, 10, 5, 1,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 404));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
              });
        });

        describe(weightClasses.LIGHTWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.LIGHTWEIGHT;
            });

            it('returns 404 for repetitions less than 73', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                  72, 71, 70, 69, 68, 67, 66,
                  65, 60, 50, 40, 30, 20, 10, 5, 1,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 404));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
              });
        });

        describe(weightClasses.SUPER_LIGHTWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_LIGHTWEIGHT;
            });

            it('returns 404 for repetitions less than 79', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                  78, 77, 76, 75,
                  70, 60, 50, 40, 30, 20, 10, 5, 1,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 404));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
              });
        });

        describe(weightClasses.WELTERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.WELTERWEIGHT;
            });

            it('returns 404 for repetitions less than 85', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                  84, 83, 82, 81, 80,
                  75, 70, 60, 50, 40, 30, 20, 10, 5, 1,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 404));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
              });
        });

        describe(weightClasses.SUPER_WELTERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_WELTERWEIGHT;
            });

            it('returns 404 for repetitions less than 91', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                  90, 89, 88, 87, 86,
                  85, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10, 5, 1,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 404));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
              });
        });

        describe(weightClasses.MIDDLEWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.MIDDLEWEIGHT;
            });

            it('returns 400 for valid repetitions', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                    168, 141, 114, 91,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 400));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
            });
        });

        // TODO: convert all below to 400 tests
        describe(weightClasses.SUPER_MIDDLEWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_MIDDLEWEIGHT;
            });

            it('returns 400 for valid repetitions', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                    178, 149, 120, 96,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 400));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
            });
        });

        describe(weightClasses.CRUISERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.CRUISERWEIGHT;
            });

            it('returns 400 for valid repetitions', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                    186, 156, 125, 100,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 400));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.HEAVYWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.HEAVYWEIGHT;
            });

            it('returns 400 for valid repetitions', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                    193, 162, 130, 104,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 400));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
            });
        });

        describe(weightClasses.SUPER_HEAVYWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_HEAVYWEIGHT;
            });

            it('returns 400 for valid repetitions', async function i() {
                this.timeout(timeout);
        
                const testRepetitions = [
                    198, 166, 133, 106,
                ];
        
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                  repetitions: rep,
                })).map(params => testError(params, 400));
        
                const results = await Promise.all(tests);
                const expected = true;
                results.forEach((actual) => strictEqual(actual, expected));
            });
        });
    });
});