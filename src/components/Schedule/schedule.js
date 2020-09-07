export default {
    data() {
        return {
            selected: '',
            days: [
                {
                    date: '01/10',
                    morning: true,
                    evening: true
                },
                {
                    date: '02/10',
                    morning: true,
                    evening: true
                },
                {
                    date: '03/10',
                    morning: true,
                    evening: true
                },
                {
                    date: '04/10',
                    morning: true,
                    evening: true
                },
                {
                    date: '05/10',
                    morning: true,
                    evening: true
                },
                {
                    date: '06/10',
                    morning: true,
                    evening: true
                }
            ]
        }
    },
    methods: {
        select(date, turn) {
            this.selected.date = date;
            this.selected.turn = turn;
        }
    }
}