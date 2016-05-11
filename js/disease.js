$(document).ready(function() {
  google.charts.load('current', {'packages' : ['table', 'corechart', 'line']});
  google.charts.setOnLoadCallback(loadTable);
  
  function loadTable() {
    var data2016 = new google.visualization.DataTable();
    loadYear('2016','All', data2016, 1000, 12);
    var data2015 = new google.visualization.DataTable();
    loadYear('2015','All', data2015, 1000, 12);
    var data2014 = new google.visualization.DataTable();
    loadYear('2014','All', data2014, 1000, 12);
    var data2013 = new google.visualization.DataTable();
    loadYear('2013','All', data2013, 1300, 15);
    var data2012 = new google.visualization.DataTable();
    loadYear('2012','All', data2012, 1700, 19);
  }
  
  function loadYear(year, disease, data, maxValue, gridlines) {
    // Use Yahoo Query Language to get the data from data.gov.sg (see https://developer.yahoo.com/yql/)
    var sql="select * from csv where url="
        +"'https://data.gov.sg/dataset/e51da589-b2d7-486b-adfc-4505d47e1206/resource/ef7e44f1-9b14-4680-a60a-37d2c9dda390/download/weekly-infectious-bulletin-cases.csv'"
        +" and columns='epi_week,disease,number_of_cases'"
        +" and epi_week like '"+year+"%'";
    
    $.ajax({
      url: 'http://query.yahooapis.com/v1/public/yql',
      data: {q: sql, format: 'json'},
      dataType: 'jsonp',
      success: function(rsp) {
        data.addColumn('string', 'date');
        data.addColumn('number', 'Acute Viral hepatitis B');
        data.addColumn('number', 'Acute Viral hepatitis C');
        data.addColumn('number', 'Avian Influenza');//5
        data.addColumn('number', 'Campylobacterenterosis');
        data.addColumn('number', 'Chikungunya Fever');
        data.addColumn('number', 'Cholera');
        data.addColumn('number', 'Dengue Fever');
        data.addColumn('number', 'Dengue Haemorrhagic Fever');  //10
        data.addColumn('number', 'Diphtheria');
        data.addColumn('number', 'Encephalitis');
        data.addColumn('number', 'Haemophilus influenzae type b');
        data.addColumn('number', 'Hand, Foot Mouth Disease');
        data.addColumn('number', 'Legionellosis');  //15
        data.addColumn('number', 'Malaria');
        data.addColumn('number', 'Measles');
        data.addColumn('number', 'Melioidosis');
        data.addColumn('number', 'Meningococcal Infection');
        data.addColumn('number', 'Mumps'); //20
        data.addColumn('number', 'Nipah virus infection');
        data.addColumn('number', 'Paratyphoid');
        data.addColumn('number', 'Pertussis');
        data.addColumn('number', 'Plague');
        data.addColumn('number', 'Pneumococcal Disease'); //25
        data.addColumn('number', 'Poliomyelitis');
        data.addColumn('number', 'Rubella');
        data.addColumn('number', 'Salmonellosis');
        data.addColumn('number', 'SARS');
        data.addColumn('number', 'Typhoid');  //30
        data.addColumn('number', 'Viral Hepatitis A');
        data.addColumn('number', 'Viral Hepatitis E');
        data.addColumn('number', 'Yellow Fever');
      
      var AcuteViralhepatitisB=0;
      var AcuteViralhepatitisC=0;
      var AvianInfluenza=0;
      var Campylobacterenterosis=0;
      var ChikungunyaFever=0;
      var Cholera=0;
      var DengueFever=0;
      var DengueHaemorrhagicFever=0;
      var Diphtheria=0;
      var Encephalitis=0;
      var Haemophilusinfluenzaetypeb=0;
      var HandFootMouthDisease=0;
      var Legionellosis=0;
      var Malaria=0;
      var Measles=0;
      var Melioidosis=0;
      var MeningococcalInfection=0;
      var Mumps=0;
      var Nipahvirusinfection=0;
      var Paratyphoid=0;
      var Pertussis=0;
      var Plague=0;
      var PneumococcalDiseaseinvasive=0;
      var Poliomyelitis=0;
      var Rubella=0;
      var Salmonellosisnonentericfevers=0;
      var SARS=0;
      var Typhoid=0;
      var ViralHepatitisA=0;
      var ViralHepatitisE=0;
      var YellowFever=0;
      
      for(i=1;i<rsp.query.results.row.length;i++) {
          var date=rsp.query.results.row[i].epi_week;
          switch(rsp.query.results.row[i].disease) {
            case 'Acute Viral hepatitis B': AcuteViralhepatitisB=rsp.query.results.row[i].number_of_cases;break;
            case 'Acute Viral hepatitis C': AcuteViralhepatitisC=rsp.query.results.row[i].number_of_cases;break;
            case 'Avian Influenza': AvianInfluenza=rsp.query.results.row[i].number_of_cases;break;
            case 'Campylobacterenterosis': Campylobacterenterosis=rsp.query.results.row[i].number_of_cases;break;
            case 'Chikungunya Fever': ChikungunyaFever=rsp.query.results.row[i].number_of_cases;break;
            case 'Cholera': Cholera=rsp.query.results.row[i].number_of_cases;break;
            case 'Dengue Fever': DengueFever=rsp.query.results.row[i].number_of_cases;break;
            case 'Dengue Haemorrhagic Fever': DengueHaemorrhagicFever=rsp.query.results.row[i].number_of_cases;break;
            case 'Diphtheria': Diphtheria=rsp.query.results.row[i].number_of_cases;break;
            case 'Encephalitis': Encephalitis=rsp.query.results.row[i].number_of_cases;break;
            case 'Haemophilus influenzae type b': Haemophilusinfluenzaetypeb=rsp.query.results.row[i].number_of_cases;break;
            case 'Hand, Foot Mouth Disease': HandFootMouthDisease=rsp.query.results.row[i].number_of_cases;break;
            case 'Legionellosis': Legionellosis=rsp.query.results.row[i].number_of_cases;break;
            case 'Malaria': Malaria=rsp.query.results.row[i].number_of_cases;break;
            case 'Measles': Measles=rsp.query.results.row[i].number_of_cases;break;
            case 'Melioidosis': Melioidosis=rsp.query.results.row[i].number_of_cases;break;
            case 'Meningococcal Infection': MeningococcalInfection=rsp.query.results.row[i].number_of_cases;break;
            case 'Mumps': Mumps=rsp.query.results.row[i].number_of_cases;break;
            case 'Nipah virus infection': Nipahvirusinfection=rsp.query.results.row[i].number_of_cases;break;
            case 'Paratyphoid': Paratyphoid=rsp.query.results.row[i].number_of_cases;break;
            case 'Pertussis': Pertussis=rsp.query.results.row[i].number_of_cases;break;
            case 'Plague': Plague=rsp.query.results.row[i].number_of_cases;break;
            case 'Pneumococcal Disease': PneumococcalDiseaseinvasive=rsp.query.results.row[i].number_of_cases;break;
            case 'Poliomyelitis': Poliomyelitis=rsp.query.results.row[i].number_of_cases;break;
            case 'Rubella': Rubella=rsp.query.results.row[i].number_of_cases;break;
            case 'Salmonellosis': Salmonellosisnonentericfevers=rsp.query.results.row[i].number_of_cases;break;
            case 'SARS': SARS=rsp.query.results.row[i].number_of_cases;break;
            case 'Typhoid': Typhoid=rsp.query.results.row[i].number_of_cases;break;
            case 'Viral Hepatitis A': ViralHepatitisA=rsp.query.results.row[i].number_of_cases;break;
            case 'Viral Hepatitis E': ViralHepatitisE=rsp.query.results.row[i].number_of_cases;break;
            case 'Yellow Fever': YellowFever=rsp.query.results.row[i].number_of_cases;
            data.addRow([  date.substring(6,8)
              ,parseInt(AcuteViralhepatitisB)
              ,parseInt(AcuteViralhepatitisC)
              ,parseInt(AvianInfluenza) //5
              ,parseInt(Campylobacterenterosis)
              ,parseInt(ChikungunyaFever)
              ,parseInt(Cholera)
              ,parseInt(DengueFever)
              ,parseInt(DengueHaemorrhagicFever) //10
              ,parseInt(Diphtheria)
              ,parseInt(Encephalitis)
              ,parseInt(Haemophilusinfluenzaetypeb)
              ,parseInt(HandFootMouthDisease)
              ,parseInt(Legionellosis)  //15
              ,parseInt(Malaria)
              ,parseInt(Measles)
              ,parseInt(Melioidosis)
              ,parseInt(MeningococcalInfection)
              ,parseInt(Mumps) //20
              ,parseInt(Nipahvirusinfection)
              ,parseInt(Paratyphoid)
              ,parseInt(Pertussis)
              ,parseInt(Plague)
              ,parseInt(PneumococcalDiseaseinvasive)  //25
              ,parseInt(Poliomyelitis)
              ,parseInt(Rubella)
              ,parseInt(Salmonellosisnonentericfevers)
              ,parseInt(SARS)
              ,parseInt(Typhoid) //30
              ,parseInt(ViralHepatitisA)
              ,parseInt(ViralHepatitisE)
              ,parseInt(YellowFever)
            ]);
            break;
          };
          document.getElementById('divDebug').innerHTML+=rsp.query.results.row[i].disease+' . ';
        };
        
        var title=year+' Infectious Disease Cases';
        var options = {
          title: title,
          titleTextStyle: {color: '#000080', fontSize: '32'},
          hAxis: {title: 'Week', viewWindow: {min: '00', max: '53'} },
          vAxis: {title: 'Cases', minValue: 0, maxValue: maxValue, gridlines: { 'count': gridlines }, viewWindow: {min: 0, max: maxValue} },
          series: {
            1: {curveType: 'function'},2: {curveType: 'function'},3: {curveType: 'function'},4: {curveType: 'function'},5: {curveType: 'function'},
            6: {curveType: 'function'},7: {curveType: 'function'},8: {curveType: 'function'},9: {curveType: 'function'},10: {curveType: 'function'},
            11: {curveType: 'function'},12: {curveType: 'function'},13: {curveType: 'function'},14: {curveType: 'function'},15: {curveType: 'function'},
            16: {curveType: 'function'},17: {curveType: 'function'},18: {curveType: 'function'},19: {curveType: 'function'},20: {curveType: 'function'},
            21: {curveType: 'function'},22: {curveType: 'function'},23: {curveType: 'function'},24: {curveType: 'function'},25: {curveType: 'function'},
            26: {curveType: 'function'},27: {curveType: 'function'},28: {curveType: 'function'},29: {curveType: 'function'},30: {curveType: 'function'},
            31: {curveType: 'function'},32: {curveType: 'function'},33: {curveType: 'function'}
          },
          legend: {position: 'top', maxLines: 4}
        };
      
        data.sort({column: 0, desc: false});
        var chart_div='chart_div'+year;
        var chart = new google.visualization.LineChart(document.getElementById(chart_div));
        chart.draw(data, options);
      } // End of For loop
    }); // End of ajax
  } // End of LoadYear
});
