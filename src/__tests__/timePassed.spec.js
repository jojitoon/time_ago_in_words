import TimePast from '../index';

describe('TimePast', () => {
    describe('inWords()', () => {
        it('should get just now', () => {
            const time = TimePast.inWords(new Date());

            expect(time).toEqual('just now');
        });

        it('should get one min ago', () => {
            const date = new Date();
            date.setMinutes(date.getMinutes() - 1);

            const time = TimePast.inWords(date);

            expect(time).toEqual('1 minute ago');
        });

        it('should get two mins ago', () => {
            const date = new Date();
            date.setMinutes(date.getMinutes() - 2);

            const time = TimePast.inWords(date);

            expect(time).toEqual('2 minutes ago');
        });

        it('should get one hour ago', () => {
            const date = new Date();
            date.setHours(date.getHours() - 1);

            const time = TimePast.inWords(date);

            expect(time).toEqual('1 hour ago');
        });

        it('should get two hours ago', () => {
            const date = new Date();
            date.setHours(date.getHours() - 2);

            const time = TimePast.inWords(date);

            expect(time).toEqual('2 hours ago');
        });

        it('should get one day ago', () => {
            const date = new Date();
            date.setHours(date.getHours() - 24);

            const time = TimePast.inWords(date);

            expect(time).toEqual('1 day ago');
        });

        it('should get two days ago', () => {
            const date = new Date();
            date.setHours(date.getHours() - 48);

            const time = TimePast.inWords(date);

            expect(time).toEqual('2 days ago');
        });

        it('should get one week ago', () => {
            const date = new Date();
            date.setHours(date.getHours() - (24 * 7));

            const time = TimePast.inWords(date);

            expect(time).toEqual('1 week ago');
        });

        it('should get two weeks ago', () => {
            const date = new Date();
            date.setHours(date.getHours() - (24 * 17));

            const time = TimePast.inWords(date);

            expect(time).toEqual('2 weeks ago');
        });

        it('should get one month ago', () => {
            const date = new Date();
            date.setMonth(date.getMonth() - 1);
            date.setHours(date.getHours() - 48);

            const time = TimePast.inWords(date);

            expect(time).toEqual('1 month ago');
        });

        it('should get two months ago', () => {
            const date = new Date();
            date.setMonth(date.getMonth() - 2);

            const time = TimePast.inWords(date);

            expect(time).toEqual('2 months ago');
        });

        it('should get 1 year ago', () => {
            const date = new Date();
            date.setFullYear(date.getFullYear() - 2);

            const time = TimePast.inWords(date);

            expect(time).toEqual('1 year ago');
        });

        it('should get two years ago', () => {
            const date = new Date();
            date.setFullYear(date.getFullYear() - 3);

            const time = TimePast.inWords(date);

            expect(time).toEqual('2 years ago');
        });
    });
});
