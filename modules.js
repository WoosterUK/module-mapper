const DATA = {"year": "201920", "modules": [{"code": "MATH1010", "name": "Mathematics 1", "preq": null, "excl": ["MATH1050", "MATH1055", "MATH1060", "MATH1331", "MATH1400"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1010", "inac": false, "seme": "1", "cred": 25, "repl": null}, {"code": "MATH1012", "name": "Mathematics 2", "preq": "MATH1010", "excl": ["MATH1050", "MATH1055", "MATH1060", "MATH1331", "MATH1400"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1012", "inac": false, "seme": "2", "cred": 25, "repl": null}, {"code": "MATH1025", "name": "Number Systems", "preq": null, "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1025", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH1026", "name": "Sets, Sequences and Series", "preq": "MATH1025", "excl": ["MATH1055"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1026", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH1050", "name": "Calculus and Mathematical Analysis", "preq": null, "excl": ["LUBS1260", "LUBS1270", "LUBS1280", "MATH1010", "MATH1012"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1050", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH1055", "name": "Numbers and Vectors", "preq": null, "excl": ["MATH1010", "MATH1012", "MATH1026"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1055", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH1060", "name": "Introductory Linear Algebra", "preq": null, "excl": ["MATH1010", "MATH1012", "MATH1331"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1060", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH1210", "name": "Maths all Around", "preq": null, "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1210", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH1225", "name": "Introduction to Geometry", "preq": null, "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1225", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH1331", "name": "Linear Algebra with Applications", "preq": null, "excl": ["MATH1010", "MATH1012", "MATH1060"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1331", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH1400", "name": "Modelling with Differential Equations", "preq": "MATH1050 and (MATH1060 or MATH1331)", "excl": ["LUBS1260", "LUBS1270", "LUBS1280", "MATH1010", "MATH1012"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1400", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH1510", "name": "Financial Mathematics 1", "preq": null, "excl": ["LUBS1035", "LUBS1036"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1510", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH1710", "name": "Probability and Statistics I", "preq": null, "excl": ["LUBS1240"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1710", "inac": false, "seme": "1", "cred": 10, "repl": "MATH1715"}, {"code": "MATH1712", "name": "Probability and Statistics II", "preq": "MATH1710", "excl": ["LUBS1240"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-1712", "inac": false, "seme": "2", "cred": 10, "repl": "MATH1725"}, {"code": "MATH2017", "name": "Real Analysis", "preq": "(MATH1010 and MATH1026) or (MATH1050 and MATH1055)", "excl": ["MATH2016"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2017", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH2022", "name": "Groups and Vector Spaces", "preq": "(MATH1012 or MATH1060) and (MATH1025 or MATH1055)", "excl": ["MATH2020", "MATH2080"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2022", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH2027", "name": "Rings and Polynomials", "preq": "MATH2020 or MATH2022", "excl": ["MATH2025", "MATH2026"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2027", "inac": false, "seme": "2", "cred": 10, "repl": "MATH2026"}, {"code": "MATH2041", "name": "Logic", "preq": null, "excl": ["MATH2042", "PHIL2122"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2041", "inac": false, "seme": "2", "cred": 10, "repl": "MATH2040"}, {"code": "MATH2042", "name": "Logic with Computation", "preq": "MATH2920", "excl": ["MATH2041", "PHIL2122"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2042", "inac": false, "seme": "2", "cred": 15, "repl": "MATH2040"}, {"code": "MATH2051", "name": "Geometry of Curves and Surfaces", "preq": "((MATH1010 or MATH1050) and (MATH1012 or MATH1060 or MATH1331)) or (PHYS1290 and PHYS1300 and MATH1060)", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2051", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH2080", "name": "Further Linear Algebra", "preq": "(MATH1012 or MATH1060) or MATH1331", "excl": ["MATH2020", "MATH2022"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2080", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH2230", "name": "Discrete Mathematics", "preq": "MATH1010 or MATH1060 or MATH1331", "excl": ["MATH2210", "MATH2231"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2230", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH2231", "name": "Discrete Mathematics with Computation", "preq": "(MATH1920 or MATH2920) and (MATH1010 or MATH1060 or MATH1331)", "excl": ["MATH2210", "MATH2230"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2231", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH2340", "name": "The Mathematics of Music", "preq": null, "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2340", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH2365", "name": "Vector Calculus", "preq": "MATH1010 or (MATH1050 and MATH1060) or (MATH1050 and MATH1331)", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2365", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH2375", "name": "Linear Differential Equations and Transforms", "preq": "(MATH1012 or MATH1400) and MATH2365", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2375", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH2391", "name": "Nonlinear Differential Equations", "preq": "(MATH1010 and MATH1012) or (MATH1400 and MATH1060) or (MATH1400 and MATH1331) or (PHYS1300 and MATH1060)", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2391", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH2530", "name": "Financial Mathematics 2", "preq": "(MATH1510 or LUBS1035) and (MATH1710 or MATH1715 or LUBS1280)", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2530", "inac": false, "seme": "1", "cred": 10, "repl": "MATH2515"}, {"code": "MATH2540", "name": "Financial Mathematics 3", "preq": "MATH2530", "excl": ["LUBS3160"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2540", "inac": false, "seme": "2", "cred": 10, "repl": "MATH2525"}, {"code": "MATH2600", "name": "Numerical Analysis", "preq": "MATH1010 or (MATH1050 and MATH1060) or (MATH1050 and MATH1331)", "excl": ["MATH2601"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2600", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH2601", "name": "Numerical Analysis with Computation", "preq": "(MATH1920 or MATH2920) and (MATH1010 or (MATH1050 and (MATH1060 or MATH1331)))", "excl": ["MATH2600"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2601", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH2620", "name": "Fluid Dynamics 1", "preq": "(MATH1010 and MATH1012 and MATH2365) or (MATH1050 and MATH1400 and MATH2365) or (PHYS1290 and PHYS1300 and PHYS2370) or (SOEE1301 and SOEE1311)", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2620", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH2640", "name": "Introduction to Optimisation", "preq": "MATH1010 or (MATH1050 and MATH1060) or (MATH1050 and MATH1331)", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2640", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH2650", "name": "Calculus of Variations", "preq": "(MATH1010 and MATH1012) or (MATH1050 and MATH1400) or (PHYS1290 and PHYS1300)", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2650", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH2700", "name": "Probability and Statistics for Scientists", "preq": null, "excl": ["LUBS1240", "MATH1710", "MATH1712"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2700", "inac": false, "seme": "1 & 2", "cred": 15, "repl": null}, {"code": "MATH2715", "name": "Statistical Methods", "preq": "(MATH1712 or MATH2700) and (MATH1010 or MATH1050)", "excl": ["SOEE3650"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2715", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH2735", "name": "Statistical Modelling", "preq": "(MATH1712 or MATH2700)", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2735", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH2740", "name": "Environmental Statistics", "preq": "MATH2715 or MATH2735", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2740", "inac": true, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH2750", "name": "Introduction to Markov Processes", "preq": "((MATH1710 and MATH1712) or MATH2700) or (LUBS1270 and LUBS1280)", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2750", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH2775", "name": "Survival Analysis", "preq": "MATH2715 or MATH2735", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2775", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH2800", "name": "Mathematics into Schools", "preq": null, "excl": ["LUBS2025", "MODL2001"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2800", "inac": false, "seme": "1 & 2", "cred": 10, "repl": null}, {"code": "MATH2900", "name": "Maths at Work", "preq": null, "excl": ["CSER1021", "CSER2201", "LUBS2020"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2900", "inac": false, "seme": "1 & 2", "cred": 10, "repl": null}, {"code": "MATH2920", "name": "Computational Mathematics", "preq": "(MATH1010 or MATH1050) and (MATH1025 or MATH1055)", "excl": ["MATH1920"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-2920", "inac": false, "seme": "1", "cred": 10, "repl": "MATH1920"}, {"code": "MATH3001", "name": "Project in Mathematics", "preq": null, "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3001", "inac": false, "seme": "1 & 2", "cred": 20, "repl": null}, {"code": "MATH3015", "name": "History of Mathematics", "preq": "(MATH1026 or MATH1050) and ((MATH1710 and MATH1712) or MATH2700)", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3015", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3017", "name": "Calculus in the Complex Plane", "preq": "MATH2017", "excl": ["MATH2016", "MATH2090"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3017", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3021", "name": "Philosophy of Logic and Mathematics", "preq": "MATH2040 or PHIL2121 or PHIL2122", "excl": ["MATH5021M", "PHIL3123"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3021", "inac": false, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH3033", "name": "Graph Theory", "preq": "(MATH2210 or MATH2230) or COMP2721 or COMP2941", "excl": ["MATH5033M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3033", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3044", "name": "Number Theory", "preq": "MATH2020 or MATH2022", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3044", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3071", "name": "Groups and Symmetry", "preq": "MATH2020 or MATH2022", "excl": ["MATH5071M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3071", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3104", "name": "Proof and Computation", "preq": "MATH2040", "excl": ["MATH5104M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3104", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3113", "name": "Differential Geometry", "preq": "MATH2051", "excl": ["MATH5113M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3113", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3120", "name": "Models and Sets", "preq": "MATH2040", "excl": ["MATH5120M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3120", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3143", "name": "Combinatorics", "preq": null, "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3143", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3153", "name": "Coding Theory", "preq": "MATH2020 or MATH2022 or MATH2080", "excl": ["MATH5153M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3153", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3195", "name": "Commutative Rings and Algebraic Geometry", "preq": "MATH2025 or MATH2026 or MATH2027", "excl": ["MATH3193", "MATH5195M", "MATH5253M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3195", "inac": false, "seme": "2", "cred": 15, "repl": "MATH3193"}, {"code": "MATH3211", "name": "Metric and Function Spaces", "preq": "MATH2016 or MATH2017", "excl": ["MATH3210", "MATH5211M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3211", "inac": false, "seme": "1", "cred": 15, "repl": "MATH3210"}, {"code": "MATH3216", "name": "Hilbert Spaces and Fourier Analysis", "preq": "MATH2016 or MATH2017", "excl": ["MATH3215", "MATH5216M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3216", "inac": false, "seme": "2", "cred": 15, "repl": "MATH3215"}, {"code": "MATH3225", "name": "Topology", "preq": "MATH2020 or MATH2022", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3225", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3232", "name": "Transformation Geometry", "preq": "MATH2020 or MATH2022 or MATH2080", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3232", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3355", "name": "Hamiltonian Systems", "preq": "MATH2650", "excl": ["MATH5356M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3355", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3365", "name": "Mathematical Methods", "preq": "MATH2375", "excl": ["MATH5366M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3365", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3374", "name": "Linear and Non-Linear Waves", "preq": "MATH2365", "excl": ["MATH5373M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3374", "inac": true, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3375", "name": "Hydrodynamic Stability", "preq": "MATH3620", "excl": ["MATH5376M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3375", "inac": true, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3385", "name": "Quantum Mechanics", "preq": "MATH2375", "excl": ["MATH5386M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3385", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3396", "name": "Dynamical Systems", "preq": "(MATH2016 or MATH2017) and (MATH1012 or MATH1060 or MATH1331)", "excl": ["MATH5395M", "MATH5396M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3396", "inac": true, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3397", "name": "Nonlinear Dynamics", "preq": "MATH2391", "excl": ["MATH5398M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3397", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3414", "name": "Analytic Solutions of Partial Differential Equations", "preq": "(MATH1012 or MATH1400) and MATH2365", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3414", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3424", "name": "Introduction to Entropy in the Physical World", "preq": "(MATH1010 and MATH1012) or (MATH1050 and MATH1400 and (MATH1060 or MATH1331))", "excl": ["MATH5424M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3424", "inac": true, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3458", "name": "Geophysical Fluid Dynamics", "preq": "MATH3620", "excl": ["MATH5458M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3458", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3459", "name": "Astrophysical Fluid Dynamics", "preq": "MATH3620", "excl": ["MATH5459M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3459", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3474", "name": "Numerical Methods", "preq": "MATH2600 or MATH2601 or COMP2647", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3474", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH3475", "name": "Modern Numerical Methods", "preq": "MATH3474", "excl": ["MATH5476M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3475", "inac": true, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3491", "name": "Discrete Systems and Integrability", "preq": "MATH2375", "excl": ["MATH5492M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3491", "inac": true, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3510", "name": "Actuarial Mathematics 1", "preq": "(MATH2515 or MATH2530) and MATH2750", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3510", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3520", "name": "Actuarial Mathematics 2", "preq": "MATH3510", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3520", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3532", "name": "Relativity and Cosmology", "preq": "MATH2365", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3532", "inac": false, "seme": "2", "cred": 15, "repl": "MATH3531"}, {"code": "MATH3565", "name": "Mathematical Biology", "preq": "MATH2391 or MATH2375", "excl": ["MATH5566M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3565", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3567", "name": "Evolutionary Modelling", "preq": "(MATH1012 or MATH1400) and MATH1710", "excl": ["MATH5567M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3567", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3620", "name": "Fluid Dynamics 2", "preq": "MATH2620", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3620", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3714", "name": "Linear Regression and Robustness", "preq": "MATH2735 or MATH2715", "excl": ["MATH5714M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3714", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH3723", "name": "Statistical Theory", "preq": "MATH2715", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3723", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH3734", "name": "Stochastic Calculus for Finance", "preq": "(MATH1710 or MATH2700) and MATH2750", "excl": ["MATH5320M", "MATH5330M", "MATH5734M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3734", "inac": false, "seme": "2", "cred": 15, "repl": "MATH3733"}, {"code": "MATH3772", "name": "Multivariate Analysis", "preq": "MATH2715 or MATH2735", "excl": ["MATH5772M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3772", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH3802", "name": "Time Series", "preq": "MATH2715 or MATH2735", "excl": ["MATH5802M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3802", "inac": false, "seme": "1", "cred": 10, "repl": null}, {"code": "MATH3820", "name": "Bayesian Statistics", "preq": "MATH2715 or MATH2735", "excl": ["MATH5820M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3820", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH3823", "name": "Generalised Linear Models", "preq": "MATH2735 or MATH2715", "excl": ["MATH5824M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-3823", "inac": false, "seme": "2", "cred": 10, "repl": null}, {"code": "MATH5003M", "name": "Assignment in Mathematics (30cr)", "preq": null, "excl": ["MATH5004M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5003M", "inac": false, "seme": "1 & 2", "cred": 30, "repl": null}, {"code": "MATH5004M", "name": "Assignment in Mathematics (40cr)", "preq": null, "excl": ["MATH5003M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5004M", "inac": false, "seme": "1 & 2", "cred": 40, "repl": null}, {"code": "MATH5021M", "name": "Philosophy of Logic and Mathematics", "preq": "MATH2040 or PHIL2121 or PHIL2122", "excl": ["MATH3021", "PHIL3123"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5021M", "inac": false, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5071M", "name": "Groups, Symmetry and Galois Theory", "preq": "(MATH2020 or MATH2022) and (MATH2025 or MATH2026 or MATH2027)", "excl": ["MATH3071", "MATH5246M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5071M", "inac": false, "seme": "1", "cred": 20, "repl": "MATH5246M"}, {"code": "MATH5104M", "name": "Advanced Proof and Computation", "preq": "MATH2040", "excl": ["MATH3104"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5104M", "inac": false, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5113M", "name": "Advanced Differential Geometry", "preq": "MATH2051", "excl": ["MATH3113"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5113M", "inac": false, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5120M", "name": "Advanced Models and Sets", "preq": "MATH2040", "excl": ["MATH3120"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5120M", "inac": false, "seme": "1", "cred": 20, "repl": null}, {"code": "MATH5195M", "name": "Advanced Commutative Rings and Algebraic Geometry", "preq": "MATH2025 or MATH2026 or MATH2027", "excl": ["MATH3195", "MATH5253M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5195M", "inac": false, "seme": "2", "cred": 20, "repl": "MATH5253M"}, {"code": "MATH5211M", "name": "Metric Spaces and Functional Analysis", "preq": "MATH2016 or MATH2017", "excl": ["MATH3210", "MATH3211"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5211M", "inac": false, "seme": "1", "cred": 20, "repl": null}, {"code": "MATH5216M", "name": "Hilbert Spaces and Advanced Fourier Analysis", "preq": "MATH2016 or MATH2017", "excl": ["MATH3216"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5216M", "inac": false, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5325M", "name": "Models in Actuarial Science", "preq": "MATH5315M or MATH2715 or MATH2735", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5325M", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH5356M", "name": "Advanced Hamiltonian Systems", "preq": "MATH2650", "excl": ["MATH3355"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5356M", "inac": false, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5366M", "name": "Advanced Mathematical Methods", "preq": "MATH2375", "excl": ["MATH3365"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5366M", "inac": false, "seme": "1", "cred": 20, "repl": null}, {"code": "MATH5373M", "name": "Advanced Linear and Nonlinear Waves", "preq": "MATH2365", "excl": ["MATH3374"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5373M", "inac": true, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5376M", "name": "Advanced Hydrodynamic Stability", "preq": "MATH3620", "excl": ["MATH3375"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5376M", "inac": true, "seme": "2", "cred": 20, "repl": "MATH5375M"}, {"code": "MATH5386M", "name": "Advanced Quantum Mechanics", "preq": "MATH2375", "excl": ["MATH3385"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5386M", "inac": false, "seme": "1", "cred": 20, "repl": null}, {"code": "MATH5395M", "name": "Advanced Dynamical Systems", "preq": "(MATH2016 or MATH2017) and (MATH1012 or MATH1060 or MATH1331)", "excl": ["MATH3396"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5395M", "inac": true, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5398M", "name": "Advanced Nonlinear Dynamics", "preq": "MATH2391", "excl": ["MATH3397"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5398M", "inac": false, "seme": "1", "cred": 20, "repl": null}, {"code": "MATH5424M", "name": "Advanced Entropy in the Physical World", "preq": "(MATH1010 and MATH1012) or (MATH1050 and MATH1400 and (MATH1060 or MATH1331))", "excl": ["MATH3424"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5424M", "inac": true, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5458M", "name": "Advanced Geophysical Fluid Dynamics", "preq": "MATH3620", "excl": ["MATH3458"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5458M", "inac": false, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5459M", "name": "Advanced Astrophysical Fluid Dynamics", "preq": "MATH3620", "excl": ["MATH3459"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5459M", "inac": false, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5476M", "name": "Advanced Modern Numerical Methods", "preq": "MATH3474", "excl": ["MATH3475"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5476M", "inac": true, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5492M", "name": "Advanced Discrete Systems and Integrability", "preq": "MATH2375", "excl": ["MATH3491"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5492M", "inac": true, "seme": "1", "cred": 20, "repl": null}, {"code": "MATH5566M", "name": "Advanced Mathematical Biology", "preq": "MATH2391 or MATH2375", "excl": ["MATH3565"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5566M", "inac": false, "seme": "1", "cred": 20, "repl": null}, {"code": "MATH5567M", "name": "Advanced Evolutionary Modelling", "preq": "(MATH1012 or MATH1400) and MATH1710", "excl": ["MATH3567"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5567M", "inac": false, "seme": "2", "cred": 20, "repl": null}, {"code": "MATH5714M", "name": "Linear Regression, Robustness and Smoothing", "preq": "MATH2715 or MATH2735", "excl": ["MATH3714"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5714M", "inac": false, "seme": "1", "cred": 20, "repl": null}, {"code": "MATH5734M", "name": "Advanced Stochastic Calculus and Applications to Finance", "preq": "(MATH1710 or MATH2700) and MATH2750", "excl": ["MATH3734", "MATH5320M", "MATH5330M"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5734M", "inac": false, "seme": "2", "cred": 20, "repl": "MATH3733"}, {"code": "MATH5772M", "name": "Multivariate and Cluster Analysis", "preq": "MATH2715 or MATH2735", "excl": ["MATH3772"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5772M", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH5802M", "name": "Time Series and Spectral Analysis", "preq": "MATH2715 or MATH2735", "excl": ["MATH3802"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5802M", "inac": false, "seme": "1", "cred": 15, "repl": null}, {"code": "MATH5820M", "name": "Bayesian Statistics and Causality", "preq": "MATH2715 or MATH2735", "excl": ["MATH3820"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5820M", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH5824M", "name": "Generalised Linear and Additive Models", "preq": "MATH2715 or MATH2735", "excl": ["MATH3823"], "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5824M", "inac": false, "seme": "2", "cred": 15, "repl": null}, {"code": "MATH5835M", "name": "Statistical Computing", "preq": "MATH2715", "excl": null, "link": "http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=201920&M=MATH-5835M", "inac": false, "seme": "1", "cred": 15, "repl": null}]};