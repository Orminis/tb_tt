// setup 
const data = {
  labels: ['Jonesmalones', 'Blattu', 'Hego Damask', 'Tranced', 'Javin Fis', 'XCAL', 'Skaar', 'MINI DarthAzazel', 'Trask droll', 'JHang', 'Puck', 'Delara Exibil', 'G4reth', 'DarthDax', 'Lambert', 'Jeeves', 'Username', 'Lol face', 'WharfRat', 'Marl Jewel', 'RoTahn Taske', 'ArtVandalay', 'Nomad', 'Zarlis Rahn', 'Ravened Stormchaser', 'Patrick4', 'Rhil Margos', 'Tani Mayse', 'OwningXylophone', 'Excessive Fist', 'Fidget92', 'BobbyMarshal', 'Geralt of Rivia', 'Squanchy420', 'non7top', 'Verage Valoor', 'Chikiller', 'Scof', 'Quinlan Vos', 'wilecoyotegenius', 'Tyrian', 'Taco Hat', 'Galatea', 'JediScum', 'JediAhsoka', 'Anci', 'Darrow Starfall', 'Calaveylon Kwai', 'Avatany', 'Kerrin TyrianBSE', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['71', '68', '65', '64', '63', '62', '61', '59', '59', '59', '56', '56', '56', '54', '52', '52', '51', '51', '50', '50', '50', '50', '49', '48', '47', '44', '41', '40', '40', '40', '40', '38', '38', '36', '35', '35', '34', '33', '32', '32', '29', '26', '26', '26', '23', '20', '19', '19', '18', '14', ],
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
    data: ['14', '13', '15', '17', '16', '13', '14', '14', '14', '15', '12', '12', '14', '9', '15', '11', '12', '11', '12', '10', '14', '13', '12', '14', '10', '11', '10', '9', '9', '12', '14', '10', '11', '15', '8', '11', '15', '10', '9', '9', '7', '7', '8', '8', '8', '6', '9', '6', '6', '4', ],
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
    data: ['14', '15', '15', '14', '15', '15', '13', '13', '12', '13', '14', '15', '14', '13', '16', '14', '13', '16', '13', '13', '13', '13', '15', '14', '13', '11', '13', '9', '8', '8', '10', '12', '11', '10', '12', '10', '9', '9', '5', '8', '9', '7', '6', '7', '7', '7', '7', '6', '6', '2', ],
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
    data: ['10', '7', '7', '7', '8', '9', '10', '10', '8', '11', '10', '6', '6', '10', '5', '8', '6', '7', '5', '6', '4', '5', '4', '3', '5', '5', '7', '5', '8', '4', '2', '4', '4', '4', '0', '2', '0', '5', '4', '3', '1', '3', '2', '0', '3', '2', '0', '2', '1', '2', ],
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
    data: ['13', '11', '8', '9', '10', '7', '8', '7', '11', '10', '8', '9', '6', '7', '6', '6', '8', '8', '7', '8', '6', '7', '7', '6', '6', '8', '4', '6', '6', '5', '6', '5', '3', '2', '5', '6', '6', '4', '7', '2', '5', '2', '3', '5', '0', '3', '1', '1', '0', '3', ],
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
    data: ['10', '11', '12', '10', '8', '9', '10', '10', '8', '9', '8', '8', '8', '9', '5', '7', '6', '3', '8', '8', '9', '7', '5', '5', '8', '7', '4', '9', '4', '6', '4', '4', '5', '4', '5', '3', '3', '4', '5', '6', '4', '5', '4', '5', '2', '1', '0', '2', '4', '2', ],
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
    data: ['10', '11', '8', '7', '6', '9', '6', '5', '6', '1', '4', '6', '8', '6', '5', '6', '6', '6', '5', '5', '4', '5', '6', '6', '5', '2', '3', '2', '5', '5', '4', '3', '4', '1', '5', '3', '1', '1', '2', '4', '3', '2', '3', '1', '3', '1', '2', '2', '1', '1', ],
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
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', ],
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
    data: ['52', '56', '54', '54', '51', '55', '54', '50', '55', '48', '50', '50', '52', '53', '50', '50', '53', '50', '50', '51', '54', '50', '50', '49', '47', '50', '47', '52', '42', '35', '41', '38', '43', '40', '38', '40', '35', '40', '44', '47', '35', '34', '36', '32', '20', '30', '18', '38', '17', '32', ],
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
    data: ['5', '5', '5', '5', '5', '4', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '4', '5', '5', '5', '3', '4', '5', '5', '5', '5', '3', '5', '5', '4', '4', '5', '5', '5', '4', '5', '5', '5', '4', '4', '4', '5', '4', '3', '5', '5', '4', '5', '4', '5', ],
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
    data: ['8', '4', '5', '4', '1', '2', '22', '10', '3', '3', '2', '5', '0', '5', '1', '16', '2', '3', '2', '0', '2', '1', '2', '0', '1', '3', '3', '1', '1', '1', '1', '5', '0', '0', '3', '5', '1', '4', '0', '1', '5', '8', '0', '0', '7', '0', '2', '0', '0', '2', ],
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
    data: ['11740000', '13455000', '11115000', '11370000', '9526250', '11236250', '11848750', '10046250', '11111250', '9533750', '11087500', '9950000', '9541250', '11886250', '7723750', '8580000', '9658750', '8860000', '8721250', '11020000', '9255000', '8783750', '8130000', '7261250', '7306250', '7188750', '7847500', '6243750', '5577500', '7580000', '9133750', '6488750', '5436250', '6956250', '5248750', '4957500', '5981250', '6943750', '5943750', '7451250', '3645000', '3352500', '5563750', '4577500', '2720000', '4318750', '2100000', '2225000', '2723750', '1837500', ],
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
    data: ['64178077', '63608101', '57672403', '62511918', '60269864', '56113685', '49198112', '63789731', '65110946', '56014721', '63271796', '62897537', '60527997', '65771490', '54355655', '60851707', '54047781', '63830241', '56998862', '64846235', '44561795', '48611415', '57235975', '48666434', '56293175', '58416387', '45889171', '54402813', '55884784', '46661733', '46384375', '48818004', '51853830', '51839109', '47136781', '47613264', '57546707', '50633683', '44249309', '53165132', '41049109', '51634981', '49462292', '40195671', '43760954', '45156208', '36905917', '43681480', '44991994', '40617581', ],
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
      y: {
        beginAtZero: true
      }
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
