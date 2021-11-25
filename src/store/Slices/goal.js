import { Grid } from '@material-ui/core'
import React from 'react'
import { Route, useHistory } from 'react-router'
import { Button } from 'reactstrap'
import SignIn from '../../pages/SignIn'
// import {embed} from 'bootstrap'
import './css.css'
export default function Goal1() {
    const history = useHistory();

    return (
        <div>
            <h2 className="heading1cont">مقدمة عن لغة <span class="word">HTML</span></h2>
<grid>
		
        			<div className="embed-responsive embed-responsive-16by9 ">
						<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/v3U-jV6-JnI" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
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
					<span class="word">HTML</span> <span class="word">HyperText Markup Language</span> أو ما يعرف بلغة توصيف النص التشعبي هي أساس البناء لشبكة الويب العالمية <span class="word">World Wide Web</span>, حيث تم تطوير <span class="word">HTML</span> في الأصل في عام <span class="word">1990</span> على يد <span class="word">Tim Berners-Lee</span> المعروف أيضا بوالد الويب.<br/>
					في عام <span class="word">1996</span> ، أصبح اتحاد شبكة الويب العالمية <span class="word">W3C</span> هو السلطةالمسؤولة عن الحفاظ على مواصفات <span class="word">HTML</span>.<br/> أصبح<span class="word">HTML</span> أيضًا معيارًا دوليًا <span class="word">ISO</span> في عام <span class="word">2000</span>. <br/>
					كما أن مصطلح النص التشعبي يعبر عن نص معروض على جهاز كمبيوتر أو جهاز إلكتروني آخر يحتوي على روابط تنقل المستخدم إلى نص آخر على الفور ، وعادةً ما يكون ذلك عن طريق النقر بالماوس أو الضغط على المفتاح.<br/>
					قد يحتوي النص التشعبي على جداول وقوائم ونماذج وصور وعناصر تقديمية أخرى.<br/>
					<span class="word">HTML5</span> هو أحدث إصدار من <span class="word">HTML</span> يوفر <span class="word">HTML5</span> نهجًا أسرع وأكثر قوة لتطوير الويب. <br/><br/>
					<strong>هناك الكثير من الأشياء التي يمكنك القيام بها باستخدام <span class="word">HTML</span>:</strong> <br/><br/>
					<svg class="svg-inline--fa fa-chevron-circle-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path></svg>
                    <i class="fas fa-chevron-circle-left"></i>
                     نشر صفحات الويب عبر الإنترنت مع النصوص والصور والقوائم والجداول ، إلخ.<br/>
					<svg class="svg-inline--fa fa-chevron-circle-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path></svg>
                    <i class="fas fa-chevron-circle-left"></i> 
                     الوصول إلى موارد الويب مثل الصور ومقاطع الفيديو أو صفحات <span class="word">HTML</span> الأخرى عبر الروابط التشعبية.<br/>
					<svg class="svg-inline--fa fa-chevron-circle-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path></svg> <i class="fas fa-chevron-circle-left"></i>  إنشاء نماذج لجمع مدخلات المستخدم مثل الاسم وعنوان البريد الإلكتروني والتعليقات وما إلى ذلك.<br/>
					<svg class="svg-inline--fa fa-chevron-circle-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path></svg> <i class="fas fa-chevron-circle-left"></i> تضمين الصور ومقاطع الفيديو ومقاطع الصوت والأفلام والتطبيقات وصفحات <span class="word">HTML</span> الأخرى مباشرة داخل صفحة <span class="word">HTML</span>. <br/>
					<svg class="svg-inline--fa fa-chevron-circle-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path></svg> <i class="fas fa-chevron-circle-left"></i>  إنشاء إصدار غير متصل لموقع الويب الخاص بك يعمل بدون إنترنت. <br/>
					<svg class="svg-inline--fa fa-chevron-circle-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path></svg> <i class="fas fa-chevron-circle-left"></i> تخزين البيانات في متصفح الويب للمستخدم والوصول إليها لاحقًا. <br/>
					<svg class="svg-inline--fa fa-chevron-circle-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path></svg> <i class="fas fa-chevron-circle-left"></i>  العثور على الموقع الحالي لزائر موقع الويب الخاص بك.<br/>
					<br/>
                    <p>
					لا تنتهي القائمة هنا ، فهناك العديد من الأشياء المميزة التي يمكننا القيام بها باستخدام <span class="word">HTML</span>.
				</p>

                <div class="nextprev d-flex justify-content-between">


<Grid item>
<Button
className="prvnxtButton"
variant="outlined"
color="primary"
onClick={() => {
if (!localStorage.getItem('role')) history.push('/Coursat');
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
if (!localStorage.getItem('role')) history.push('/Goal2');
else history.push('/profile/me');
}}
>
{!localStorage.getItem('role') ? `التالي ` : `my account`}
</Button>
</Grid>


{/* <a href="/" class="prvnxtButton">« التالي</a>
<a href="/Goal" class="prvnxtButton">السابق »</a> */}
</div>

                {/* <div class="nextprev d-flex justify-content-between">
                <a href="/About" class="prvnxtButton">السابق »</a>
				<a href="/Goal2" class="prvnxtButton">« التالي</a>
						</div> */}
        </div>
    )
}
