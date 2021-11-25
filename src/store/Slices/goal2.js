import { Grid } from '@material-ui/core'
import React from 'react'
import { Route, useHistory } from 'react-router'
import { Button } from 'reactstrap'
import SignIn from '../../pages/SignIn'
// import {embed} from 'bootstrap'
import './css.css'
export default function Goal2() {
    const history = useHistory();

    return (
        <div>
            <h2 className="heading1cont">البداية مع  <span class="word">HTML</span></h2>
<grid>
		
        			<div className="embed-responsive embed-responsive-16by9 ">
						<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1AUWsHvDQUc" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
					</div>
				</grid>
                <div class="container">
	
    <div class="alert alert-warning text-center" role="alert">
                للدخول إلى إختبار الدرس يجب عليك تسجيل الدخول أولاُ<br/>
               

                {/* <Route path="/sign-in">
                  <SignIn />
                </Route>
 */}
                <Grid item>
                    <Button
                    className="btn btn-info"
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        if (!localStorage.getItem('role')) history.push('/sign-up');
                        else history.push('/profile/me');
                      }}
                    >
                      {!localStorage.getItem('role') ? `تسجيل الدخول ` : `my account`}
                    </Button>
                  </Grid>


    </div>	
                    
</div>

					<br/>


          <div class="container"> 
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	{/* <!-- HO Adds --> */}
	<ins class="adsbygoogle"  data-ad-client="ca-pub-6866152452053380" data-ad-slot="6613445009" data-ad-format="auto" data-full-width-responsive="true"></ins>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
</div>				<h2 class="heading2cont">انشأ أول صفحة HTML</h2>
				<p>
					لانشاء ملف 
          <span class="word">HTML</span>
           يعرض رسالة 
           <span class="word">"Hello world"</span>
            في متصفح الويب، دعنا نتبع الخطوات التالية :
            <br/>
				</p>
				<h3 class="heading3cont"><i class="fas fa-chevron-circle-left"></i> الخطوة الأولى : إنشاء ملف HTML</h3>
				<p>قم بفتح محرر نصوص عادي على جهاز الكمبيوتر الخاص بك و قم بإنشاء ملف جديد </p>

				<div class="tip">
        <svg class="svg-inline--fa fa-user-astronaut fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-astronaut" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"></path></svg>
					<i class="fas fa-user-astronaut"></i>
           نصيحة:
					<p>
            نقترح عليك استخدام 
            <span class="word">Notepad</span>
             (في 
             <span class="word">Windows</span>
             ) أو 
             <span class="word">TextEdit</span>
              (على 
              <span class="word">Mac</span>
              ) أو اي برنامج تحرير نصوص بسيط آخر للقيام بذلك.
              </p>
				</div>

				<h3 class="heading3cont"><i class="fas fa-chevron-circle-left"></i> الخطوة الثانية : كتابة بعض اكواد HTML</h3>
				<p>ابدأ مع نافذة فارغة واكتب الكود التالي:</p>
				<div class="card">
					<div class="card-header d-flex justify-content-between">
						<div class="example">مثال</div>
						<a href="https://rnbal4optyukm7eoxea92a-on.drv.tw/الموقع التعليمى العربى/" target="_blank" class="btn btn-secondary">تشغيل</a>
					</div>
					<div class="card-body">
						<ol id="firstCode" class="card-text">
							<li><span class="tag">&lt;!doctype html&gt;</span></li>
							<li><span class="tag">&lt;html&gt;</span></li>
							<li><span class="tag">&lt;head&gt;</span></li>
							<li><span class="tag card-p-1t">&lt;title&gt;</span>Page Title<span class="tag">&lt;/title&gt;</span></li>
							<li><span class="tag">&lt;/head&gt;</span></li>
							<li><span class="tag">&lt;body&gt;</span></li>
							<li><span class="tag card-p-1t">&lt;p&gt;</span>Hello World!<span class="tag">&lt;/p&gt;</span></li>
							<li><span class="tag">&lt;/body&gt;</span></li>
							<li><span class="tag">&lt;/html&gt;</span></li>
						</ol>
					</div>
				</div>
				<h3 class="heading3cont"><i class="fas fa-chevron-circle-left"></i> الخطوة الثالثة : حفظ الملف HTML</h3>
				<p>الآن احفظ الملف على سطح المكتب باسم <span class="word">"myfirstpage.html"</span></p>
				<div class="note">
					<i class="far fa-clipboard"></i> ملاحظة:
					<p>من المهم تحديد الامتداد <span class="word">.html</span> - بعض برامج تحرير النصوص ، مثل <span class="word">notepad</span> ، ستحفظه تلقائيًا بإمتداد <span class="word">.txt</span></p>
				</div>
				<p>لفتح الملف في متصفح الويب انتقل إلى الملف الخاص بك ثم انقر مرتين عليه. سيتم فتحه في متصفح الويب الافتراضي الخاص بك. إذا لم يحدث ذلك ، افتح المتصفح واسحب الملف إليه.</p>
				<hr/>
				<h2 class="heading2cont">شرح الكود</h2>
				<p>
					<i class="fas fa-chevron-circle-left"></i> السطر الأول <code>&lt;!DOCTYPE html&gt;</code> هو إعلان نوع الصفحة. يرشد متصفح الويب أن هذه الصفحة هو صفحة <span class="word">HTML5</span><br/>
					<i class="fas fa-chevron-circle-left"></i> <span data-toggle="tooltip" title="(بالانجليزية :Element)">العنصر</span> <code>&lt;head&gt;</code>هو حاوية للوسوم التي توفر معلومات حول الصفحة ، على سبيل المثال ، يحدد الوسم <code>&lt;title&gt;</code> عنوان الصفحة.<br/>
					<i class="fas fa-chevron-circle-left"></i> يحتوي <span data-toggle="tooltip" title="(بالانجليزية :Element)">العنصر</span> <code>&lt;body&gt;</code> على المحتوى الفعلي للصفحة الويب (الفقرات والارتباطات والصور والجداول وما إلى ذلك) الذي يتم عرضه في متصفح الويب وعرضه على المستخدم.<br/><br/>
					سوف تتعرف على <span data-toggle="tooltip" title="(بالانجليزية :Element)">عناصر</span> <span class="word">HTML</span> المختلفة بالتفصيل لاحقا. في الوقت الحالي ، ركز فقط على البنية الأساسية لصفحة <span class="word">HTML</span>.<br/>
				</p>
				<div class="note">
					<i class="far fa-clipboard"></i> ملاحظة:
					<p>يظهر إعلان DOCTYPE في أعلى صفحة الويب قبل جميع العناصر الأخرى ؛ ومع ذلك ، فإن إعلان doctype نفسه ليس وسم HTML.<br/> تتطلب كل صفحة HTML إعلان نوع الصفحة لضمان عرض صفحاتك بشكل صحيح في متصفحات الويب المختلفة.</p>
				</div>
				<div class="container"> 
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	{/* <!-- HO Adds --> */}
	<p class="adsbygoogle"  data-ad-client="ca-pub-6866152452053380" data-ad-slot="6613445009" data-ad-format="auto" data-full-width-responsive="true"></p>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
</div>				<div class="tip">
					<i class="fas fa-user-astronaut" aria-hidden="true"></i> نصيحة:
					<p>تشكل الوسوم <code>&lt;html&gt;</code> و <code>&lt;head&gt;</code> و <code>&lt;body&gt;</code> الهيكل الأساسي لكل صفحة ويب. المحتوى داخل <code>&lt;head&gt;</code> و <code>&lt;/head&gt;</code> غير مرئي للمستخدمين باستثناء <span data-toggle="tooltip" title="(بالانجليزية :Element)">عنصر</span> واحد: النص بين وسمّي <code>&lt;title&gt;</code> و <code>&lt;/title&gt;</code> والذي يظهر كعنوان في علامة تبويب المتصفح.</p>
				</div>
				<hr/>
				<h2 class="heading2cont"> الوسوم (Tags) والعناصر (Elements)</h2>
				<p>
					يتم كتابة كود <span class="word">HTML</span> في شكل عناصر<span class="word">Elements</span> <span class="word">HTML</span> تتكون من الوسوم <span class="word">Tags</span>. الوسوم هي السمة الأساسية لـ <span class="word">HTML</span>. تتكون كل الوسوم من كلمة أساسية ، محاطة بأقواس زاوية ، مثل <code>&lt;html&gt;</code> و <code>&lt;head&gt;</code> و <code>&lt;body&gt;</code> و <code>&lt;title&gt;</code> و <code>&lt;p&gt;</code> وما إلى ذلك. <br/>
					تأتي وسوم <span class="word">HTML</span> عادةً في أزواج مثل <code>&lt;html&gt; و &lt;/html&gt;</code>. غالبًا ما يطلق على الوسم الأول في الزوج ما وسم الفتح (أو وسم البدء) <code>&lt; &gt;</code> ، ويسمي الوسم الثاني وسم الإغلاق (أو وسم النهاية) <code>&lt;/&gt;</code>.<br/>
					يتشابه وسم الفتح ووسم الإغلاق ، باستثناء شرطة مائلة <code> / </code> بعد قوس زاوية فتح وسم الإغلاق ، لإعلام المتصفح بأن الأمر قد اكتمل.<br/>
					بين وسمي البداية والنهاية يمكنك وضع المحتويات المناسبة. على سبيل المثال ، سيتم كتابة فقرة ، يتم تمثيلها بواسطة العنصر <code>p</code> ، على النحو التالي :
				</p>
				<div class="card">
					<div class="card-header d-flex justify-content-between">
						<div class="example">مثال</div>
						<a href="https://rnbal4optyukm7eoxea92a-on.drv.tw/الموقع التعليمى العربى/" target="_blank" class="btn btn-secondary">تشغيل</a>
					</div>
					<div class="card-body">
						<ol id="secondCode" class="card-text">
							<li><span class="tag">&lt;p&gt;</span>This is a paragraph.<span class="tag">&lt;/p&gt;</span></li>
							<li><span class="comment enComment">&lt;!-- Paragraph with nested element --&gt;</span></li>
							<li><span class="tag">&lt;p&gt;</span>This is <span class="tag">&lt;b&gt;</span>another<span class="tag">&lt;/b&gt;</span> paragraph.<span class="tag">&lt;/p&gt;</span></li>
						</ol>
					</div>
				</div>
				<hr/>
	












                <div class="nextprev d-flex justify-content-between">


                  <Grid item>
                    <Button
                    className="prvnxtButton"
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        if (!localStorage.getItem('role')) history.push('/Goal1');
                        else history.push('/profile/me');
                      }}
                    >
                      {!localStorage.getItem('role') ? `السابق ` : `my account`}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                    className="prvnxtButton"
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        if (!localStorage.getItem('role')) history.push('/Goal1');
                        else history.push('/profile/me');
                      }}
                    >
                      {!localStorage.getItem('role') ? `التالي ` : `my account`}
                    </Button>
                  </Grid>


				{/* <a href="/" class="prvnxtButton">« التالي</a>
				<a href="/Goal" class="prvnxtButton">السابق »</a> */}
						</div>
        </div>
    )
}
