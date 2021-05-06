---
layout: default
title: FSK
---

<style>
    table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
<body>
ป้อนคำถาม : <input type="text" id="question" style="width: 30em"/><br>
<button onclick="search()">ค้นหา</button>

<p id="tes"></p>
<table id="Answer"></table>
</body>
<script>
var qa = [
    { question: "ในเทพนิยายกรีก โพรมีธีอุสได้นำพาสิ่งใดมาสู่โลกของมนุษย์", answer: "ไฟ" },   
    { question: "ชาวไวกิงมักถูกกล่าวว่าเป็นอาชีพอาชญากรประเภทใด", answer: "โจรสลัด" },
    { question: "เลือดของกุ้งมังกรเป็นสีอะไร", answer: "สีน้ำเงิน" },
    { question: "Back Hawk Down หมายถึงปฏิบัติการทางทหาร...", answer: "โซมาเลีย" },
    { question: "ใครคือเทพีเเห่งชัยชนะ", answer: "วิกตอเรีย" },
    { question: "จังหวัดที่มีประชากรมากที่สุดในไทย", answer: "กรุงเทพมหานคร" },
    { question: "ยาสลบทำจากอะไร", answer: "คลอโรฟอร์ม" },
    { question: "ข้อใดต่อไปนี้เป็นสำนักข่าวของประเทศฝรั่งเศส", answer: "Agence France-Presse" },
    { question: "อวัยวะที่สามารถล้างพิษได้ในร่างกายของมนุษย์คือ", answer: "ตับ" },
    { question: "พีระมิดสุริยันตั้งอยู่ที่ไหน", answer: "เม็กซิโก" },
    { question: "ดารานำชายในเรื่อง เเฮร์รี่พอตเตอร์ คือใคร", answer: "เเฮร์รี่ พอตเตอร์" },
    { question: "ข้อใดต่อไปนี้คือเเฮร์รี่พอตเตอร์", answer: "หนุ่มชายชาวอังกฤษ"},
    { question: "คะเเนนการเสิร์ฟเทนนิสเรียกว่าคะเเนนอะไร", answer: "Aceball"},
    { question: "ผลผลิตอะไรทำให้เวเนซุเอลารวยที่สุดในประเทศอเมริกาใต้", answer: "น้ำมัน"},
    { question: "คำว่า Trick or Treat เกี่ยวข้องกับเทศกาลใด", answer: "วันฮาโลวีน"},
    { question: "สัตว์ประจำชาติของประเทศไทยคือสัตว์อะไร", answer: "ช้าง"},
    { question: "ผู้ประดิษฐ์ iPhone คือใคร", answer: "สตีฟ จอบส์"},
    { question: "ข้อใดต่อไปนี้ไม่ใช่เผ่าพันธ์ุใน เวิลด์ออฟวอร์คราฟต์", answer: "เซิร์ก"},
    { question: "สัตว์เลี้ยงลูกด้วยนมที่มีอายุยืนที่สุดคือ", answer: "ช้าง"},
    { question: "การหมุนเวียนของเหรีญญในโลกของเซลดา...", answer: "เงินเฟ้อ"},
    { question: "อาวุธใดต่อไปนี้ไม่ใช่อุปกรณ์ที่ขาดไม่ได้ในยุคกลาง", answer: "คันธนูเเละลูกศร"},
    { question: "ในบรรดาสีต่างๆ สีใดดูดซับความร้อนง่ายที่สุด", answer: "สีดำ"},
    { question: "ในกีฬาบาสเกตบอล ลูกโยนโทษได้กี่คะเเนน", answer: "1 คะเเนน"},
    { question: "ละครประเภทใดใน 4 เรื่องนี้ มีต้นกำเนิดจากอิตาลี", answer: "opera"},
    { question: "ดาวเคราะห์ดวงใดอยู่ใกล้ดวงอาทิตย์ที่สุด", answer: "ดาวพุธ"},
    { question: "บัวหิมะมีสีใด", answer: "สีขาว"},
    { question: "คือก่อนวันคริสต์มาสเรียกว่าอะไร", answer: "คริสต์มาสอีฟ"},
    { question: "คุณธรรมคือความรู้ ...นักคิดท่านใด...", answer: "โสกราตีส"},
    { question: "ในนิยายเรื่อง คนค่อมเเห่งน็อทร์-ดาม คนตีระฆังคือใคร", answer: "กาซีโมโด"},
    { question: "เเรงบันดาลใจในการสร้างไวโอลินคืออะไร", answer: "ฮังดรัม"},
    { question: "สีดำผสมกับสีขาวเป็นสีอะไร", answer: "สีเทา"},
    { question: "ข้อใดต่อไปนี้คือความเร็วที่ต้องการเมื่อยานอวกาศบินรอบโลก", answer: "ควรมเร็วห้องอวกาศที่ 1"},
    { question: "บิกัสโซ มีผลงานภาพวาดที่ได้รับรางวัล สันติภาพ คือ", answer: "นกพิราบเเห่งสันติภาพ"},
    { question: "บัลเลต์ 3 เรื่องหลักคือ... เเละอีกเรื่องใด", answer: "สวอนเลก"},
    { question: "ดาว 12 ดวงที่อยู่บนธงสหภาพยุโรปเป็นสีอะไร", answer: "สีเหลือง"},
    { question: "วันที่ 1 เมษาของทุกปีเป็นวันอะไร", answer: "วันเมษาหน้าโง่"},
    { question: "ใครเป็นคนทำบาดเเผลบนใบหน้าของฮิมูระ...", answer: "คู่หมั้นของยูกิชิโร่ โทโมเอะ"},
    { question: "หัวหน้าทีมที่เป็นฝ่ายตรงข้ามกับออพติมัส...", answer: "เมกะทรอน"},
    { question: "เมืองหลวงของประเทศเวียดนามอยู่ที่ไหน", answer: "ฮานอย"},
    { question: "เมืองใดเป็นเมืองหลวงของบราซิลในอดีต...", answer: "ริโอเดจาเนโร"},
    { question: "ผู้คิดค้น ทฤษฏีสัมพัทธภาพ คือใคร", answer: "ไอน์สไตน์"},
    { question: "ผู้เเต่งการ์ตูน ดราก้อนบอล คือคนประเทศใด", answer: "ญี่ปุ่น"},
    { question: "คุณสมบัติของรูปเรขาคณิตใดที่มีความมั่นคง", answer: "รูปสามเหลี่ยม"},
    { question: "", answer: ""}
];

var sameInput = [];

    function search()
    {
        var text = document.getElementById("question").value;
        var tbl = document.getElementById("Answer");
        var tblBody = document.createElement("tbody");

        tbl.innerHTML = "";
        sameInput = [];

        for (i = 0; i < qa.length; i++)
        {
            var condition = qa[i].question.includes(text);
            
            if (condition)
            {
                sameInput.push(qa[i]);
                document.getElementById("tes").innerHTML = sameInput.length.toString();
            }

           
        }

        for( var j = 0 ; j < sameInput.length ; j++ ){
            var row = document.createElement( "tr" );
            for( var i = 0 ; i < 2 ; i++ ){
                var cell = document.createElement( "td" );
                var cellText = document.createTextNode("Null");
                if(i === 0)
                {
                    cellText.nodeValue = sameInput[j].question;
                }                
                if(i === 1)
                {
                    cellText.nodeValue = sameInput[j].answer;
                }
                cell.appendChild( cellText );
                row.appendChild( cell );
            }

            tblBody.appendChild( row );
        }
        tbl.appendChild( tblBody );
        tbl.setAttribute( "border" , "1" );
    }

</script>