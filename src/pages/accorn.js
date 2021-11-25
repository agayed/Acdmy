import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
export default function NavBarm() {
  return (
 
<div >
  <h1>عن الموقع نتحدث:</h1>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>اسم الموقع</Accordion.Header>
    <Accordion.Body>
      <h1 class="box">
      الموقع التعليمى العربى
      </h1>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>مصمم الموقع</Accordion.Header>
    <Accordion.Body>
      <ul >
        <li><h1>الاسم:</h1><p>عبدالجيد محمد</p></li>
        <li><h4>محل الإقامة:</h4><p>برج العرب الجديدة - الإسكندرية - مصر</p></li>
        <li><h4>:المؤهلات العلمية</h4><p>بكالوريوس فى العلوم الزاعية</p></li>
        <li><h4>سنة التخرج:</h4><p>2007م</p></li>
        <li><h4>الوظيفة الحالية:</h4><p>مسئول التخطيط بشركة صناعات غذائية</p></li>
        <li><h4>المؤهلات والخبرات الأخرى:</h4><p>
          <ul>
          <li>برمجة السى شارب</li>
          <li>برمجة الديف إكسبريس -سى شارب</li>
          <li>برمجة السيرنتي - سى شارب</li>
          <li>برمجة الواجهات الأمامية للويب</li>
          <li>استخدام برنامج الإكسيل فى الأعمال الإدارية</li>
          <li>برمجة برنامج الأكسس فى تصميم برامج للأعمال المختلفة</li>
          </ul>
          </p></li>
        {/* <li><h4>  </h4><p></p></li>
        <li><h4></h4><p></p></li> */}
      </ul>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>ماالهدف من الموقع</Accordion.Header>
    <Accordion.Body>
      <h4>
       يهتم الموقع بتوفير مادة علمية فى كل المجالات وخصوصا التى تساعد فى خلق فرص حقيقية  لتنمية المجتمع وتسهيل المصادر العلمية على طلبة العلم وأصحاب الأعمال والمساعدة المباشرة فى الوصول للأهداف  
      </h4>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header>المبادئ الأساسية فى بناء الموقع</Accordion.Header>
    <Accordion.Body>
      <ul>
        <li>اتاحة التعليم الإلكترونى بأسلوب جديد ومبتكر</li>
        <li>توفير المواد العلمية فى كل المجالات</li>
        <li>سهولة التصفح للموقع والإطلاع على كل مجال بشكل عام وأيضا بشكل مفصل</li>
        <li>ربط الموقع بالمواقع التعليمية الأخرى وخلق بيئة معرفية على المستوى العالمى</li>
        <li>سهولة الإطلاع على كل درس بشكل مقروء أو مرئي</li>
        <li>وجود إختبارات على كل جزئية والإطلاع على التقدم لكل مستخدم</li>
        <li>ربط الموقع بالمؤسسات التعليمية الأخرى سواء كانت عامة أو خاصة</li>
        <li>نشرات دورية حول كل جديد فى العلم سواء على المستوى المحلى أو الدولى</li>
      </ul>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header>أقسام الموقع</Accordion.Header>
    <Accordion.Body>
      <ul>
        <ol>
          
        </ol>
        <li>الصفحة الرئيسية</li>
        <li>إضافة دورة جديدة</li>
        <li>إضافة درس جديد</li>
        <li>إضافة موضوع جديد</li>
        <li>قائمة الدورات</li>
        <li>عن الموقع</li>
        <li>تواصل معنا</li>
      </ul>
    </Accordion.Body>
  </Accordion.Item>

</Accordion>


</div>

  
  )
}
