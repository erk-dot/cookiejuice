// Shared by the schedule (index.html) and the printable schedule (print.html).
// Browsers cache this file for hours, so after any change bump ?v= on the
// games.js script tag in both pages.
// [date, kickoff, opponent, home?, location, notes, score]
// score is optional: [tcGoals, opponentGoals], added once the game is played.
const GAMES = [
    ['2026-11-02', '3:45 PM', 'Redeemer', false, 'Redeemer Christian School, 155 SW 87 Pl, Ocala 34476', 'No bus, own ride.', [2, 1]],
    ['2026-11-05', '6:00 PM', 'South Sumter', true, '', '', [5, 0]],
    ['2026-11-10', '6:30 PM', 'Citrus', false, '600 W Highland Blvd, Inverness 34452', 'Bus'],
    ['2026-11-12', '7:00 PM', 'Central', false, '14075 Ken Austin Pkwy, Brooksville 34613', 'Bus'],
    ['2026-11-16', '6:00 PM', 'West Port', true, '', ''],
    ['2026-11-18', 'TBD', 'Bishop Snyder', false, '5001 Samaritan Way, Jacksonville 32210', 'Bus. Kickoff time TBD.'],
    ['2026-12-01', '7:00 PM', 'Williston', false, '350 Robert Philpot Wy, Williston 32696', 'Bus. Girls play too.'],
    ['2026-12-03', '6:00 PM', 'Lake Weir', true, '', ''],
    ['2026-12-08', '7:00 PM', 'P.K. Yonge', true, '', 'Girls play too.'],
    ['2026-12-10', '6:30 PM', 'South Sumter', false, '706 N Main St, Bushnell 33513', 'Bus'],
    ['2026-12-14', '6:00 PM', 'Forest', false, '5000 SE Maricamp Rd, Ocala 34480', 'No bus (Marion Co.), own ride.'],
    ['2027-01-05', '6:30 PM', 'The Villages', true, '', ''],
    ['2027-01-07', '7:00 PM', 'St. Francis', false, '4100 NW 115th Terrace, Gainesville 32606', 'Bus. Girls play too.'],
    ['2027-01-11', '5:00 PM', 'Mount Dora Christian', false, '301 W 13th Ave, Mt Dora 32757', 'Bus'],
    ['2027-01-12', '7:00 PM', 'Belleview', false, '10400 SE 36 Ave, Belleview 34420', 'No bus (Marion Co.), own ride. Girls play too.'],
    ['2027-01-14', '6:00 PM', 'North Marion', true, '', ''],
    ['2027-01-19', '7:30 PM', 'South Marion', true, '', '<b>Senior Night.</b> Girls play too.'],
    ['2027-01-26', '6:30 PM', 'Lecanto', true, '', ''],
    ['2027-01-28', '6:00 PM', 'The Rock School', false, '9818 SW 24th Ave B, Gainesville 32607', 'Bus'],
];

const HOME = '2600 SW 42nd St, Ocala 34471';
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
