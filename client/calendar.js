> cal = new c.Calendar();               // weeks start on Sunday by default
> m = cal.monthDates(2012,0,            // January is 0 in JS Date
...   function(d) {return (' '+d.getDate()).slice(-2)}, 
...   function(w) {return w.join(' | ')}
);
> for (i=0; i<m.length; i++) console.log(m[i]);
 1 |  2 |  3 |  4 |  5 |  6 |  7
 8 |  9 | 10 | 11 | 12 | 13 | 14
15 | 16 | 17 | 18 | 19 | 20 | 21
22 | 23 | 24 | 25 | 26 | 27 | 28
29 | 30 | 31 |  1 |  2 |  3 |  4
