// setup 
const data = {
  labels: ['XCAL', 'Blattu', 'Tranced', 'Skaar', 'Jonesmalones', 'Javin Fis', 'Delara Exibil', 'ArtVandalay', 'Trask droll', 'Magnafael', 'G4reth', 'RoTahn Taske', 'MINI DarthAzazel', 'Puck', 'Marl Jewel', 'JHang', 'Patrick4', 'Nomad', 'Fidget92', 'Jeeves', 'WharfRat', 'T', 'Username', 'DarthDax', 'El Jefe', 'Kÿłë škÿwäłkër', 'Lambert', 'non7top', 'Zarlis Rahn', 'Tani Mayse', 'BobbyMarshal', 'Isaac72', 'Tyrian', 'Rhil Margos', 'DarthRevanNL', 'JediScum', 'Chikiller', 'Verage Valoor', 'Squanchy420', 'Yosh', 'Scof', 'JediAhsoka', 'Excessive Fist', 'OwningXylophone', 'Geralt of Rivia', 'Avatany', 'Kdizyl', 'Taco Hat', 'LordPolunXo', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['88', '88', '87', '79', '77', '75', '75', '70', '70', '69', '65', '64', '63', '60', '60', '60', '59', '59', '57', '56', '54', '52', '48', '48', '48', '46', '46', '46', '45', '44', '43', '40', '38', '38', '38', '37', '36', '35', '33', '32', '32', '31', '31', '30', '30', '24', '23', '22', '19', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1
  },{
    label: 'Waves Completed (Phase 1)',
    data: ['18', '20', '20', '18', '18', '19', '18', '16', '19', '20', '18', '18', '17', '17', '18', '16', '15', '16', '17', '18', '18', '13', '16', '18', '15', '15', '16', '16', '16', '14', '12', '8', '9', '6', '16', '12', '14', '10', '11', '12', '9', '9', '4', '10', '11', '8', '9', '8', '7', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 2)',
    data: ['16', '17', '16', '17', '13', '14', '16', '15', '9', '16', '14', '12', '12', '10', '14', '13', '13', '9', '9', '8', '10', '9', '14', '5', '10', '10', '10', '10', '8', '8', '9', '7', '8', '5', '5', '6', '7', '6', '6', '5', '2', '5', '7', '6', '4', '4', '4', '4', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 3)',
    data: ['13', '11', '14', '11', '10', '12', '13', '11', '9', '11', '11', '12', '0', '11', '7', '8', '10', '10', '9', '9', '8', '8', '13', '6', '9', '8', '8', '6', '2', '6', '5', '7', '7', '10', '3', '6', '4', '6', '6', '5', '6', '6', '7', '5', '7', '6', '3', '3', '3', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 4)',
    data: ['15', '17', '17', '11', '13', '12', '15', '10', '15', '16', '10', '9', '12', '8', '8', '12', '12', '10', '9', '9', '8', '13', '2', '9', '8', '5', '6', '9', '6', '7', '6', '8', '6', '8', '6', '6', '3', '7', '5', '4', '7', '6', '6', '6', '1', '0', '3', '5', '2', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 5)',
    data: ['18', '16', '15', '12', '15', '13', '11', '12', '13', '6', '9', '11', '14', '9', '9', '9', '6', '10', '11', '9', '8', '5', '2', '7', '4', '5', '5', '5', '10', '7', '9', '6', '6', '7', '7', '6', '5', '5', '4', '5', '6', '3', '6', '2', '4', '3', '4', '2', '7', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 6)',
    data: ['8', '7', '5', '10', '8', '5', '2', '6', '5', '0', '3', '2', '8', '5', '4', '2', '3', '4', '2', '3', '2', '4', '1', '3', '2', '3', '1', '0', '3', '2', '2', '4', '2', '2', '1', '1', '3', '1', '1', '1', '2', '2', '1', '1', '3', '3', '0', '0', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Special Missions',
    data: ['0', '1', '1', '0', '1', '0', '0', '0', '2', '1', '0', '1', '1', '1', '1', '0', '0', '1', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Missions Attempted',
    data: ['56', '60', '57', '51', '49', '49', '49', '46', '54', '48', '46', '57', '43', '54', '48', '41', '44', '46', '49', '48', '45', '42', '33', '41', '37', '39', '43', '40', '33', '49', '37', '37', '28', '43', '32', '38', '46', '32', '32', '35', '28', '27', '28', '41', '41', '24', '36', '31', '15', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Number of phases deployed (p2 onward)',
    data: ['4', '5', '5', '4', '4', '5', '5', '5', '5', '5', '5', '5', '4', '5', '4', '5', '5', '5', '5', '5', '5', '4', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '3', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Operation Units Deployed',
    data: ['22', '15', '40', '46', '67', '10', '38', '11', '29', '25', '3', '10', '21', '17', '12', '13', '22', '24', '14', '15', '13', '8', '31', '27', '6', '3', '10', '10', '0', '6', '15', '3', '27', '24', '8', '1', '20', '26', '13', '13', '22', '17', '5', '14', '24', '7', '13', '5', '1', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'CM Points',
    data: ['19174534', '19269221', '18830158', '18220628', '13780783', '14138127', '16736564', '14984690', '14930939', '12748438', '15128439', '14085314', '13260471', '13898283', '13773752', '12042501', '12216876', '12012970', '14030314', '11467970', '11227501', '11194220', '11461876', '11965314', '11020314', '9970939', '8976876', '7930938', '6970313', '8162501', '9404845', '10474845', '6443126', '10981564', '6730626', '8004376', '6334844', '6730626', '8874376', '7073126', '10794064', '5782188', '9969376', '5489688', '6771720', '5567032', '5039688', '2990000', '3835938', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Territory Points',
    data: ['70079254', '72665917', '73131037', '61119336', '59686110', '66680373', '71549390', '65079661', '71598435', '67674886', '67720956', '72492368', '60899935', '69578609', '63754362', '60606674', '65702811', '64837853', '65570706', '66334225', '62236936', '56535495', '51623700', '69273726', '57131100', '62835357', '64470574', '59584314', '56668253', '60122348', '54541196', '63981364', '44958105', '63205506', '62541636', '61128485', '60643907', '58391504', '56112863', '57694584', '55688139', '49398542', '58289376', '59122090', '55014627', '51694443', '53105410', '52687565', '32378858', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  }]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                }
            }
        },
	    plugins: {
			tooltip: {
				mode: 'index',
				intersect: false
		    },
		}
    }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;
