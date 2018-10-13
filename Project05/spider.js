var http=require("http")
var https=require("https")
var cheerio=require('cheerio')
var url='https://www.lagou.com/'

function filterMenu(html){
    var $=cheerio.load(html)
    var menu=$('.menu_main')
    var menuData=[]
    menu.each(function(index,value){
        var menuTitle=$(value).find('h2').text()
        var menuLists=$(value).find('a')
        var menuList=[];
        
        menuLists.each(function(index,value){
            menuList.push($(value).text())
        })

        menuData.push({
            menuTitle:menuTitle,
            menuList:menuList

        })
    })
    return menuData;
}

function printMenu(menu){
    menu.forEach(function(value){
        console.log(value.menuTitle+'\n')
        value.menuList.forEach(function(value){
            console.log(value)
        })
    })
}

https.get(url,function(res){
    var html=''
    res.on('data',function(data){
        html+=data
    })

    res.on('end',function(){
        var result=filterMenu(html)
        printMenu(result)
        //console.log(result)

    })

    res.on('error',function(err){
        console.log(err)
    })
})