const { strictEqual } = require('assert');
const {
    durations,
    eventTypes,
    genders,
    kettlebellWeights,
    rankings,
    weightClasses,
} = require('../../shared/enums');
const { getRankingLocal, testError } = require('./util/getRankingUtil');

describe(__filename, () => {

    const timeout = 4000;

    let params;
    beforeEach(() => {
        params = {
            gender: genders.WOMEN,
            eventType: eventTypes.JERK,
            duration: durations.TEN,
            kettlebellWeight: kettlebellWeights.TWENTY,
        };
    });

    describe('Positive Tests', () => {

        describe(weightClasses.STRAWWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.STRAWWEIGHT;
            });
        
            it('returns CMS for repetitions greater than or equal to 72', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 72; i < 100; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank I for repetitions less than 72 and greater than or equal to 49', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 49; i < 72; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank II for repetitions less than 49 and greater than or equal to 39', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 39; i < 49; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_II;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank III for repetitions less than 39 and greater than or equal to 31', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 31; i < 39; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_III;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.FLYWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.FLYWEIGHT;
            });
        
            it('returns CMS for repetitions greater than or equal to 77', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 77; i < 110; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank I for repetitions less than 77 and greater than or equal to 55', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 55; i < 77; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank II for repetitions less than 55 and greater than or equal to 44', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 44; i < 55; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_II;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank III for repetitions less than 44 and greater than or equal to 35', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 35; i < 44; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_III;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.BANTAMWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.BANTAMWEIGHT;
            });
        
            it('returns CMS for repetitions greater than or equal to 83', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 83; i < 110; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank I for repetitions less than 83 and greater than or equal to 62', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 62; i < 83; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank II for repetitions less than 62 and greater than or equal to 50', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 50; i < 62; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_II;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank III for repetitions less than 50 and greater than or equal to 40', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 40; i < 50; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_III;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.FEATHERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.FEATHERWEIGHT;
            });
        
            it('returns CMS for repetitions greater than or equal to 90', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 90; i < 120; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank I for repetitions less than 90 and greater than or equal to 69', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 69; i < 90; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank II for repetitions less than 69 and greater than or equal to 55', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 55; i < 69; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_II;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank III for repetitions less than 55 and greater than or equal to 44', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 44; i < 55; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_III;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.LIGHTWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.LIGHTWEIGHT;
            });
        
            it('returns CMS for repetitions greater than or equal to 96', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 96; i < 130; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank I for repetitions less than 96 and greater than or equal to 76', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 76; i < 96; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank II for repetitions less than 76 and greater than or equal to 61', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 61; i < 76; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_II;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank III for repetitions less than 61 and greater than or equal to 49', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 49; i < 61; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_III;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.SUPER_LIGHTWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_LIGHTWEIGHT;
            });
        
            it('returns CMS for repetitions greater than or equal to 102', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 102; i < 130; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank I for repetitions less than 102 and greater than or equal to 83', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 83; i < 102; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank II for repetitions less than 83 and greater than or equal to 66', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 66; i < 83; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_II;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank III for repetitions less than 66 and greater than or equal to 53', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 53; i < 66; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_III;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.WELTERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.WELTERWEIGHT;
            });
        
            it('returns CMS for repetitions greater than or equal to 109', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 109; i < 140; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank I for repetitions less than 109 and greater than or equal to 90', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 90; i < 109; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank II for repetitions less than 90 and greater than or equal to 71', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 71; i < 90; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_II;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank III for repetitions less than 71 and greater than or equal to 58', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 58; i < 71; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_III;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.SUPER_WELTERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_WELTERWEIGHT;
            });
        
            it('returns CMS for repetitions greater than or equal to 116', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 116; i < 150; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.CMS;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank I for repetitions less than 116 and greater than or equal to 95', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 95; i < 116; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_I;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank II for repetitions less than 95 and greater than or equal to 76', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 76; i < 95; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_II;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
            
            it('returns Rank III for repetitions less than 76 and greater than or equal to 61', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 61; i < 76; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.RANK_III;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
    });
    
    describe('Negative Tests', () => {

        describe(weightClasses.STRAWWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.STRAWWEIGHT;
            });
        
            it('should return no rank for repetitions less than 31', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 0; i < 31; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.NO_RANK;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.FLYWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.FLYWEIGHT;
            });
        
            it('should return no rank for repetitions less than 35', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 0; i < 35; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.NO_RANK;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.BANTAMWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.BANTAMWEIGHT;
            });
        
            it('should return no rank for repetitions less than 40', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 0; i < 40; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.NO_RANK;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.FEATHERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.FEATHERWEIGHT;
            });
        
            it('should return no rank for repetitions less than 44', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 0; i < 44; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.NO_RANK;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.LIGHTWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.LIGHTWEIGHT;
            });
        
            it('should return no rank for repetitions less than 49', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 0; i < 49; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.NO_RANK;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.SUPER_LIGHTWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_LIGHTWEIGHT;
            });
        
            it('should return no rank for repetitions less than 53', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 0; i < 53; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.NO_RANK;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.WELTERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.WELTERWEIGHT;
            });
        
            it('should return no rank for repetitions less than 58', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 0; i < 58; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.NO_RANK;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.SUPER_WELTERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_WELTERWEIGHT;
            });
        
            it('should return no rank for repetitions less than 61', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [];
                for (let i = 0; i < 61; i++) testRepetitions.push(i);
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => getRankingLocal(params));
            
                const results = await Promise.all(tests);
                const expected = rankings.NO_RANK;
                results.forEach(({ ranking: actual }) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.MIDDLEWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.MIDDLEWEIGHT;
            });
        
            it('should return 400 for valid repetitions', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [
                    116, 95, 76, 61,
                ];
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => testError(params, 400));
            
                const results = await Promise.all(tests);
                const expected = true
                results.forEach((actual) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.SUPER_MIDDLEWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_MIDDLEWEIGHT;
            });
        
            it('should return 400 for valid repetitions', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [
                    123, 100, 81, 64,
                ];
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => testError(params, 400));
            
                const results = await Promise.all(tests);
                const expected = true
                results.forEach((actual) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.CRUISERWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.CRUISERWEIGHT;
            });
        
            it('should return 400 for valid repetitions', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [
                    129, 105, 84, 67,
                ];
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => testError(params, 400));
            
                const results = await Promise.all(tests);
                const expected = true
                results.forEach((actual) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.HEAVYWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.HEAVYWEIGHT;
            });
        
            it('should return 400 for valid repetitions', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [
                    134, 108, 87, 69,
                ];
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => testError(params, 400));
            
                const results = await Promise.all(tests);
                const expected = true
                results.forEach((actual) => strictEqual(actual, expected));
            });
        });
        
        describe(weightClasses.SUPER_HEAVYWEIGHT, () => {
            beforeEach(() => {
                params.weightCategory = weightClasses.SUPER_HEAVYWEIGHT;
            });
        
            it('should return 400 for valid repetitions', async function i() {
                this.timeout(timeout);
            
                const testRepetitions = [
                    137, 111, 89, 71,
                ];
            
                const tests = testRepetitions.map(rep => Object.assign({}, params, {
                    repetitions: rep,
                })).map(params => testError(params, 400));
            
                const results = await Promise.all(tests);
                const expected = true
                results.forEach((actual) => strictEqual(actual, expected));
            });
        });
    });
});