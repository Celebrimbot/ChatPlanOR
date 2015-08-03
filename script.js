
$(function(){
    
    var participants = $('#participants').DataTable();
    var possiblemeets = $('#possiblemeets').DataTable();
  
  $('#AddName').click(function(){
    
    participants.column(0).cells().data().each(function (value, index) {
      //alert(index + ": " + value + " ... " + Math.floor(index/2) +", " + Math.floor((index+1)/2))
      
      if(Math.floor(index/2) === Math.floor((index+1)/2)){
          possiblemeets
              .row.add([
                value,
                $('#NameToAdd').val()
              ])
              .draw();
      }
    });
    
    
    participants
    .row.add([$('#NameToAdd').val()
              ,hex_md5($('#NameToAdd').val())
             ])
    .draw(); 
    
    
    
  });
  
  
  //participants.search('1').draw();
  
  /*
  
  
  $.each(possiblemeets.rows, function (a, a_row) {
    $.each(possiblemeets.rows, function (b, b_row){
        console.log(a + "" + b);
    });
  });
  */
  
  /*
  possiblemeets
    .row.add([1,1])
    .row.add([1,2])
    .draw();
  */
});
  
