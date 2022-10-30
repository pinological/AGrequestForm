var costmoneyDay = 0;

function selector1() {
    var muni = document.getElementById("munID");

    if (muni.value == "Shivasatakshi") {
        document.querySelector(".wardNoC").innerHTML = '<select name="wa"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option>ption></select> <input type="hidden" name="c0" value="1">';
        document.querySelector(".ScController").innerHTML = ' <select name="SC" class="SC"><option value="0">0</option>ption><option value="1">1</option>ption><option value="2">2</option>ption><option value="3">3</option>ption><option value="4">4</option>ption><option value="5">5</option>ption><option value="6">6</option>ption><option value="7">7</option>ption><option value="9">9</option>ption><option value="10">10</option>ption><option value="13">13</option>ption><option value="14">14</option>ption></select>'
    } else if (muni.value == "Gauriganj") {
        document.querySelector(".wardNoC").innerHTML = '<select name="wa"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option>ption> <input type="hidden" name="c0" value="2">';
        document.querySelector(".ScController").innerHTML = ' <select name="SC" class="SC"><option value="6">6</option>ption><option value="7">7</option>ption><option value="8">8</option>ption><option value="9">9</option>ption><option value="10">10</option>ption><option value="11">11</option>ption><option value="12">12</option>ption></select>'
    } else if (muni.value == "Gauradaha") {
        document.querySelector(".wardNoC").innerHTML = '<select name="wa"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option>ption> <input type="hidden" name="c0" value="3">';
        document.querySelector(".ScController").innerHTML = ' <select name="SC" class="SC"><option value="15">15</option>ption><option value="16">16</option>ption><option value="17">17</option>ption><option value="18">18</option>ption><option value="19">19</option>ption><option value="20">20</option>ption><option value="21">21</option>ption></select>'
    } else if (muni.value == "Kamal") {
        document.querySelector(".wardNoC").innerHTML = '<select name="wa"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option>ption> <input type="hidden" name="c0" value="4">';
    }

}

function selector2() {
    var muni = document.getElementById("Doid");
    if (muni.value == "DOT") {
        document.querySelector(".dotortc").innerHTML = ' <select name="DOT"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option>ption></select> <input type="hidden" id="TC" name="TC" value="NA">'
    } else if (muni.value == "TC") {
        document.querySelector(".dotortc").innerHTML = ' <select name="TC"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option>ption></select> <input type="hidden" id="DOT" name="DOT" value="NA">'
    }

}

function selector3() {

    const timenow = new Date().toLocaleDateString();
    document.getElementById("timeData").innerHTML = '<input type="hidden" name="timenow" value="' + timenow + '">';


    var kiss = document.getElementById("kissID");
    console.log(kiss.value);
    if (kiss.value == "No") {
        document.getElementById("ScDiv").innerHTML = " ";
        document.getElementById("ScDiv2").innerHTML = "";
        document.getElementById("dotortcOP").innerHTML = "";
        document.getElementById("dotortcSel").innerHTML = "";


    } else {
        document.getElementById("ScDiv").innerHTML = '<p class="lableitem">SC</p>';
        document.getElementById("ScDiv2").innerHTML = '<input type="text" name="SC">';
        document.getElementById("dotortcOP").innerHTML = " Select DOT or TC";
        document.getElementById("dotortcSel").innerHTML = ' <select name="DOTorTC" id="Doid" onclick="selector2()"><option value="DOT">DOT</option><option value="TC">TC</option>';

    }
}


//nepaliDate

    /* Select your element */
    var elm = document.getElementById("nepali-datepicker");
 
    /* Initialize Datepicker with options */
    elm.nepaliDatePicker({
        ndpYear: true,
        ndpMonth: true,
        ndpYearCount: 10
    });
//demoValue
// mobiledrier 500
//Thrasher 600
//Planter 700
//tractor 800
// mini 900
//land 1000
// var mobiledrier = 500;
// var thrasher = 600;
// var planter = 700;
// var tractor = 800;
// var mini = 900;
// var land = 1000;

// function daynumAdd() {
//     if (document.getElementById("daytime").value == "1" && document.getElementById("machineSele").value == "Mobile drill") {
//         costmoney += mobiledrier;
//     }
//     if (document.getElementById("daytime").value == "1" && document.getElementById("machineSele").value == "Thrasher") {
//         costmoney += thrasher;
//     }
//     if (document.getElementById("daytime").value == "1" && document.getElementById("machineSele").value == "Thrasher") {
//         costmoney += thrasher;
//     }
//     if (document.getElementById("daytime").value == "1" && document.getElementById("machineSele").value == "Thrasher") {
//         costmoney += thrasher;
//     }
//     if (document.getElementById("daytime").value == "1" && document.getElementById("machineSele").value == "Thrasher") {
//         costmoney += thrasher;
//     }
//     if (document.getElementById("daytime").value == "1" && document.getElementById("machineSele").value == "Thrasher") {
//         costmoney += thrasher;
//     }
//  }