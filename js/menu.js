(function($){
	$.fn.menuGenerator = function(menuClass){
		var menuItems = '';
		
		this.each(function(){

			for(var i=0; i<eval(menuClass+"[0].menuData.length"); i++){
				(function(i){
					
					menuItems += "<li class='"+eval(menuClass+"[0].menuInfo[0].menuitemclass")+"' id='"+eval(menuClass+"[0].menuData[i].id")+"'><a href='"+eval(menuClass+"[0].menuData[i].href")+"' title='"+eval(menuClass+"[0].menuData[i].title")+"' alt='"+eval(menuClass+"[0].menuData[i].alt")+"' class='"+eval(menuClass+"[0].menuInfo[0].mainanochorclass")+"'>"+eval(menuClass+"[0].menuData[i].name")+"</a>";
					
					if(menu[0].menuData[i].menuChild.length > 0){
					menuItems += "<ul class='"+eval(menuClass+"[0].menuInfo[0].submenuclass")+"'>";
						for(var j=0; j<eval(menuClass+"[0].menuData[i].menuChild.length"); j++){
							(function(j){
								menuItems += "<li  class='"+eval(menuClass+"[0].menuInfo[0].submenuitemclass")+"' id='"+eval(menuClass+"[0].menuData[i].menuChild[j].id")+"' ><a href='"+eval(menuClass+"[0].menuData[i].menuChild[j].href")+"' title='"+eval(menuClass+"[0].menuData[i].menuChild[j].title")+"' alt='"+eval(menuClass+"[0].menuData[i].menuChild[j].alt")+"' class='"+eval(menuClass+"[0].menuInfo[0].subanochorclass")+"'>"+eval(menuClass+"[0].menuData[i].menuChild[j].name")+"</a></li>";
							}(j));
						}
					menuItems += "</ul></li>";						
					}else{
						menuItems += "</li>";
					}
				
				}(i));
					
			}
			
			$(this).append("<ul class='"+eval(menuClass+"[0].menuInfo[0].mainmenuclass")+"' id='"+eval(menuClass+"[0].menuInfo[0].mainmenuid")+"' >"+menuItems+"</ul>");
		});
	}
}(jQuery));
