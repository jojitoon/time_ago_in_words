import Helpers from '../helper';

describe('Helpers', () => {
    describe('convertToTime', () => {
        it('should properly convert to time', () => {
            const time = Helpers.convertToTime('2012-10-10');

            expect(time).toEqual(new Date('2012-10-10'));
        });
    });
});
