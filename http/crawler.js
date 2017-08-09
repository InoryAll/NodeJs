/*crawler.js*/
var http=require('http');
var url='http://www.imooc.com/learn/348';
var cheerio=require('cheerio');

function filterChapter(html) {
    var $=cheerio.load(html);
    var chapters=$('.chapter');

    /*[
        {
            chapterTitle:''
            video:[
                {
                    title:''
                    id:''
                }
            ]
        }
    ]*/

    var courseChapters=[];
    chapters.each(function (item,index) {
         var chapter=$(this);
         var chapterData={
             chapterTitle:'',
             video:[]
         };
         var chapterTitle=chapter.find('strong').text().trim();
         chapterData.chapterTitle=chapterTitle;

         var videos=chapter.find('.video a');
         videos.each(function (item,name) {
             var video=$(this);
             var videoData={};
             videoData.title=video.text().trim();
             videoData.id=video.attr('href').split('/')[2];
             chapterData.video.push(videoData);
         });

         courseChapters.push(chapterData);

    });

    return courseChapters;

}

function printFilterResult(courseChapters) {
    courseChapters.forEach(function (item,index) {
        var chapterData=item;
        var chapterTitle=chapterData.chapterTitle;
        console.log(chapterTitle+'\n');

        var video=chapterData.video;
        video.forEach(function (item,index) {
            var videoData=item;
            var title=videoData.title;
            var id=videoData.id;

            console.log('     【'+id+'】  '+title+'\n');
        });

    });
}


http.get(url,function (response) {
    var html='';

    response.on('data',function (data) {
        html+=data;
    });

    response.on('end',function () {
        var courseChapters=filterChapter(html);
        printFilterResult(courseChapters);
    });
}).on('error',function () {
    console.log('error');
});