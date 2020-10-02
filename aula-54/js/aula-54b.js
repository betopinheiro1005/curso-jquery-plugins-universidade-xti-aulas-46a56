$(function(){

    $("#bt-0").click(function(){
        $("#resposta").remove("img");
        location.reload();
    });

    $("#bt-1").click(function(){

        $.getJSON("https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
            {
                tags: "astronomia",
                tabmode: "any",
                format: "json" 
            },
            function(data){
                $.each(data.items, function(i, item){
                    $("#resposta").append($("<img />").attr("src", item.media.m).css("margin-right", "10px"));
                    if(i==3) return false;
                });
            }
        );

        return false;
        
    });   

});