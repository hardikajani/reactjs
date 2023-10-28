$(document).ready(function(){
    $('button').click(function(){

        var principalAmount = parseInt($('#principal_amount').val());

        var rate = $('#intrest_rate').val();

        var start = $('#start_date').val();
        var end = $('#end_date').val();

        if(isNaN(principalAmount)){
            alert('Enter Number only');
        }
        else {   
            if(start>end){
                alert('check date');
            }
            else if(start==0 && end==0){
                alert('please enter date');
            }
            else if(rate==0) {
                alert('Please select Int. Rate');
            }
            else {
                var startDay = new Date(start);
                var endDay = new Date(end);
                var millisecondsPerDay = 1000 * 60 * 60 * 24;
                var millisBetween = endDay.getTime() - startDay.getTime();
                var days = millisBetween / millisecondsPerDay;
                // Round down.
                var totalDay = Math.floor(days);

                var intrest= totalDay/365*rate;
                var intrestAmount=Math.floor(principalAmount*intrest/100);

                $('.result').html(
                    '<p class="mb-0">Principal Amount is -->' + principalAmount +'</p> <p class="mb-0">Intrest Amount is -->' + intrestAmount +'</p> <p class="mb-0">Number of days -->' + totalDay +'</p> <p class="mb-0">Total Amount with intrest -->' + (principalAmount+intrestAmount) +'</p>' 
                );
            }
        }      
        // console.log(intrestAmount);
    });
});