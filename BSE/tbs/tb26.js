// setup 
const data = {
  labels: ['Blattu', 'XCAL', 'Tranced', 'Skaar', 'DarthDax', 'Puck', 'Enigma', 'Nomad', 'Delara Exibil', 'Patrick4', 'WharfRat', 'T', 'Javin Fis', 'G4reth', 'Marl Jewel', 'RoTahn Taske', 'MINI DarthAzazel', 'El Jefe', 'JHang', 'Dava', 'OwningXylophone', 'Jonesmalones', 'Rhil Margos', 'Dârth Jungle Asian', 'Lambert', 'BobbyMarshal', 'Tyron Brandt', 'Scof', 'JakeY', 'Verage Valoor', 'Jeeves', 'BobaChuck91', 'Chikiller', 'Tani Mayse', 'non7top', 'ArtVandalay', 'manolis', 'Q Ryker', 'Geralt of Rivia', 'Tyrian', 'Squanchy420', 'Darthsyn', 'JediAhsoka', 'Trask droll', 'Fidget92', 'Yosh', 'Jay Maop', 'Excessive Fist', 'Taco Hat', 'Avatany', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['97', '95', '92', '90', '81', '79', '79', '79', '75', '74', '72', '69', '68', '67', '64', '63', '63', '62', '62', '61', '59', '59', '58', '57', '56', '53', '52', '52', '52', '52', '52', '51', '50', '49', '49', '49', '47', '47', '45', '44', '43', '40', '39', '34', '34', '29', '26', '24', '22', '10', ],
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
    data: ['23', '25', '21', '22', '21', '16', '19', '22', '19', '19', '20', '18', '17', '20', '16', '22', '13', '16', '17', '18', '16', '0', '18', '17', '20', '17', '19', '17', '21', '17', '20', '18', '17', '16', '17', '8', '18', '14', '17', '13', '16', '0', '15', '8', '17', '2', '12', '1', '9', '0', ],
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
    data: ['18', '15', '17', '18', '16', '14', '17', '13', '15', '14', '12', '11', '13', '15', '15', '12', '13', '12', '14', '14', '13', '13', '15', '8', '12', '10', '0', '9', '11', '13', '11', '9', '12', '13', '10', '4', '9', '10', '10', '7', '7', '12', '8', '5', '7', '7', '6', '5', '4', '4', ],
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
    data: ['16', '15', '16', '15', '16', '14', '16', '15', '14', '15', '15', '11', '15', '11', '16', '12', '11', '14', '13', '15', '13', '14', '11', '15', '12', '9', '16', '10', '12', '13', '14', '8', '14', '9', '12', '16', '11', '12', '7', '9', '6', '11', '7', '2', '0', '10', '6', '6', '2', '0', ],
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
    data: ['19', '19', '18', '18', '14', '19', '17', '14', '16', '11', '14', '12', '12', '12', '11', '11', '11', '10', '11', '11', '9', '14', '7', '8', '7', '9', '9', '8', '6', '6', '0', '8', '4', '7', '5', '3', '7', '5', '5', '9', '7', '11', '0', '6', '4', '4', '0', '2', '2', '2', ],
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
    data: ['12', '12', '13', '12', '8', '12', '10', '10', '5', '10', '7', '10', '6', '5', '2', '2', '9', '6', '4', '2', '5', '11', '4', '5', '3', '4', '8', '4', '1', '2', '6', '5', '2', '4', '2', '12', '1', '4', '3', '3', '4', '3', '4', '7', '4', '3', '1', '6', '2', '1', ],
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
    data: ['9', '9', '7', '5', '6', '4', '0', '5', '6', '5', '4', '7', '5', '4', '4', '4', '6', '4', '3', '1', '3', '7', '3', '4', '2', '4', '0', '4', '1', '1', '1', '3', '1', '0', '3', '6', '1', '2', '3', '3', '3', '3', '5', '6', '2', '3', '1', '4', '3', '3', ],
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
    data: ['2', '2', '2', '3', '1', '2', '1', '1', '1', '1', '1', '1', '2', '1', '2', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '2', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '0', '0', '2', '1', '0', '1', ],
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
    data: ['62', '61', '60', '59', '58', '55', '51', '53', '50', '50', '55', '52', '45', '46', '44', '51', '56', '44', '51', '45', '45', '37', '49', '50', '49', '42', '35', '40', '50', '42', '39', '44', '43', '50', '42', '36', '41', '34', '40', '37', '31', '26', '23', '28', '37', '31', '16', '20', '27', '9', ],
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
    data: ['5', '5', '5', '5', '4', '5', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '4', '4', '5', '5', '5', '4', '4', '5', '5', '4', '4', '5', '5', '5', '5', '5', '5', '5', '5', '4', '5', '5', '4', '5', '5', ],
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
    data: ['12', '55', '52', '55', '35', '21', '23', '32', '41', '15', '16', '23', '11', '9', '17', '6', '42', '6', '9', '80', '20', '64', '19', '16', '24', '6', '14', '15', '6', '25', '19', '13', '12', '6', '12', '16', '6', '26', '18', '26', '7', '55', '26', '17', '21', '15', '8', '20', '20', '13', ],
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
    data: ['23713336', '22505211', '22601930', '21019692', '17195159', '20720367', '17248284', '16838597', '19143960', '17127241', '15205471', '16941148', '14850990', '17463178', '16992084', '15432396', '14287709', '14680834', '13522658', '12800939', '13407396', '13337578', '13229221', '13890833', '13162552', '12466302', '10985001', '14106772', '9695626', '9832501', '11508752', '11843752', '10568751', '9067032', '9806095', '14168647', '10991564', '13369584', '9219064', '9538908', '9381564', '9280158', '7069064', '9786928', '9357502', '7433439', '5998126', '11070522', '4824845', '3292970', ],
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
    data: ['86951307', '87400964', '87623981', '82527884', '77745500', '84910181', '72184367', '80754415', '83260119', '80289218', '76711975', '78358171', '74649197', '80327075', '73245721', '80780318', '70120697', '77001797', '70589048', '73545065', '76246512', '72451999', '73555246', '76723618', '76703400', '63170847', '68834705', '65182972', '71134180', '71300160', '64402179', '62784592', '72976471', '71792198', '60459281', '56937103', '73064315', '71559774', '65706892', '61208225', '63628412', '70515567', '62014936', '74521457', '59163337', '66727641', '68442908', '60616088', '60123945', '53122494', ],
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