// Make the form more user friendly with masking
$('#pprice').mask('0,000,000', {reverse: true});
$('#dpamt').mask('0,000,000', {reverse: true});
$('#intrate').mask("0.00", {reverse: true});

// Calculate stuff
$('#showcalc').click(function (e) {
    e.preventDefault();
    $('#monthlycalc').slideToggle();
});
$('#resetit').click(function (e) {
    e.preventDefault();
    $('#calcresults').html('');
    $('#monthlycalc input').val('');
});

function numberWithCommas(x) {
    if (isNaN(x)) {
        x = 0;
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$('#calcit').click(function (e) {
    e.preventDefault();
    var pp = $('#pprice').val();
    var dp = $('#dpamt').val();
    var loanamt = pp - dp;
    var intrate = $('#intrate').val();
    var years = $('#numyears').val();
    var months = years * 12;
    var camt = intrate / 100;
    camt = camt / 12;
    var cfirst = 1 + camt;
    cfirst = Math.pow(cfirst, months);
    cfirstf = camt * cfirst;
    var csecond = cfirst - 1;
    var payment = loanamt * cfirstf;
    payment = payment / csecond;
    payment = payment.toFixed(2);
    var finalamt = payment * months;
    finalamt = finalamt - loanamt;
    finalamt = finalamt.toFixed(2);
    $('#calcresults').html('<div class="col-sm-4">Amount financed:<h3 class="feature-head"><sup>$</sup>' + numberWithCommas(loanamt) + '</h3></div><div class="col-sm-4">Monthly payment:<h3 class="feature-head"><sup>$</sup>' + numberWithCommas(payment) + '</h3></div><div class="col-sm-4">Total interest:<h3 class="feature-head"><sup>$</sup>' + numberWithCommas(finalamt) + '</h3></div>');
});
