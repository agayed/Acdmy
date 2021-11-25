import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Coursat from '../store/Slices/course';
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4),
  },
  mainFooter: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
    <>
      <Divider />

      <footer class="footer-bs" >
        <div class="row box ">
            <div class="col-md-3 footer-brand animated fadeInLeft ">
                <h2>من نحن</h2>
                <p class="boxf1">موقع مختص بتعليم تقنيات تطوير الويب من الموضوعات الأساسية إلى الموضوعات
                    المتقدمة.
                    إلى جانب امثلة واقعية مع تطبيق عملي بحيث يمكنك إنشاء موقعك الإلكتروني أو العمل في مجال تصميم
                    وتطوير الويب.</p>
                <p class="footer-aboutus boxf2">جميع الحقوق محفوظة</p>
            </div>
            <div class="col-md-3 footer-nav animated fadeInUp">
                <h4 class="boxf2"><svg class="svg-inline--fa fa-laptop-code fa-w-20 boxf1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg><i class="fas fa-laptop-code "></i> &nbsp; &nbsp; الدورات</h4>
                <div>
                    <ul class="pages boxf2">
                        <li class="boxf1"><a href="/About"><svg class="svg-inline--fa fa-html5 fa-w-12 boxf1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="html5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg><i class="fab fa-html5 "></i> &nbsp; &nbsp;HTML5</a>
                        </li>
                        <li class="boxf1"><a href="/Coursat"><svg class="svg-inline--fa fa-css3-alt fa-w-12 boxf1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="css3-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path></svg><i class="fab fa-css3-alt"></i> &nbsp; &nbsp;CSS3</a>
                        </li>
                        <li class="boxf1"><a href="/Coursat"><svg class="svg-inline--fa fa-js-square fa-w-14 boxf1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="js-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg> <i class="fab fa-js-square"></i> &nbsp; &nbsp;JavaScript</a>
                        </li>
                        <li class="boxf1"><a href="/Coursat"><svg class="svg-inline--fa fa-bootstrap fa-w-14 boxf1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bootstrap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z"></path></svg><i class="fab fa-bootstrap"></i> &nbsp; &nbsp;Bootstrap</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 footer-social animated fadeInDown">
                <h4><svg class="svg-inline--fa fa-thumbs-up fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="thumbs-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path></svg><i class="far fa-thumbs-up"></i> &nbsp; تابعونا</h4>
                <ul>
                    <li><a href="https://facebook.com/"><svg class="svg-inline--fa fa-facebook fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg> <i class="fab fa-facebook"></i> 
                            &nbsp; Facebook</a></li>
                    <li><a href="https://www.youtube.com/"><svg class="svg-inline--fa fa-youtube fa-w-18" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg><i class="fab fa-youtube"></i>  &nbsp;
                            Youtube</a></li>
                </ul>
            </div>
            <div class="col-md-3 footer-ns animated fadeInRight ">

                <ul class="list ">
                    <li><a href="about-us.php">من نحن</a></li>
                    <li><a href="privacy-policy.php">سياسة الخصوصية</a></li>
                    <li><a href="contactUs/contact-us.php">تواصل معنا</a></li>
                </ul>
            </div>
        </div>
    </footer>



      <footer className={classes.footer} class="box boxf1">
        <div className={classes.mainFooter} >
          <Typography variant="subtitle1" align="left" color="textSecondary" component="p" class="boxf1">
            الموقع التعليمى العربى
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center" class="boxf2">
        برمجة  & مهندس{' '}
          <Link color="inherit" href="agayedm@outlook.com" target="_blank" class="boxf1">
            عبدالجيد محمد
          </Link>
        </Typography>

          <Typography variant="subtitle1" align="right" color="textSecondary" component="p" class="boxf1">
          عبدالجيد
            © {new Date().getFullYear()} 
          </Typography>
          
        </div>
      </footer>
    </>
    </div>
  );
}
