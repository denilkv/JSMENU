(function($){
	$.fn.menuGenerator = function(menuClass){
		var menuItems = '';
		
		this.each(function(){
			for(var i=0; i<eval(menuClass+"[0].menuData.length"); i++){
				(function(i){
					if(!eval(menuClass+"[0].menuData[i].disable")){
						menuItems += "<li class='"+eval(menuClass+"[0].menuInfo[0].mainLiClass")+"' id='"+eval(menuClass+"[0].menuData[i].id")+"'><a href='"+eval(menuClass+"[0].menuData[i].href")+"' title='"+eval(menuClass+"[0].menuData[i].title")+"' alt='"+eval(menuClass+"[0].menuData[i].alt")+"' class='"+eval(menuClass+"[0].menuInfo[0].mainAClass")+"'>"+eval(menuClass+"[0].menuData[i].name")+"</a>";
					}
					if(menu[0].menuData[i].menuChild.length > 0){
							menuItems += "<ul class='"+eval(menuClass+"[0].menuInfo[0].subUlClass")+"'>";
								for(var j=0; j<eval(menuClass+"[0].menuData[i].menuChild.length"); j++){
									(function(j){
										if(!eval(menuClass+"[0].menuData[i].menuChild[j].disable")){									
											menuItems += "<li  class='"+eval(menuClass+"[0].menuInfo[0].subLiClass")+"' id='"+eval(menuClass+"[0].menuData[i].menuChild[j].id")+"' ><a href='"+eval(menuClass+"[0].menuData[i].menuChild[j].href")+"' title='"+eval(menuClass+"[0].menuData[i].menuChild[j].title")+"' alt='"+eval(menuClass+"[0].menuData[i].menuChild[j].alt")+"' class='"+eval(menuClass+"[0].menuInfo[0].subAClass")+"'>"+eval(menuClass+"[0].menuData[i].menuChild[j].name")+"</a></li>";
										}
									}(j));
								}
							menuItems += "</ul></li>";		
					}else{
						menuItems += "</li>";
					}
				
				}(i));
					
			}
			
			$(this).append("<ul class='"+eval(menuClass+"[0].menuInfo[0].mainUlClass")+"' id='"+eval(menuClass+"[0].menuInfo[0].mainUlId")+"' >"+menuItems+"</ul>");
		});
	}
}(jQuery));
