import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import Section from '../components/Section';
import useRpay from '../hooks/useRpay';
import useGet from '../hooks/useGet';
import Image from '../assets/images/image.svg';
import CircleSpring from '../components/CircleSpring';
import { Carousel } from 'react-bootstrap';
import '../index.css'
// import Fades from './Fade';
// import Fullscreen_Modal from './Fullscreen Modal';
// import CourseCard from '../components/CourseCard';
// import abouts from './Bootstrap/about';
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 6),
  },
  image: {
    height: '75%',
    width: '75%',
  },
  heroButtons: {
    marginTop: theme.spacing(1),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(30),
  },
}));

export default function Album() {
  const classes = useStyles();
  const history = useHistory();
  const [res, err, get] = useGet();

  useRpay();

  useEffect(() => {
    get('/pages/home');
  }, []);

  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 image box"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuOOgkXD80vdDRQWt75hdzuZcFJik94ah_Q&usqp=CAU"
        alt="معا نتحدى المستحيل"
      />
      <Carousel.Caption>
        <h3 className="Carousel_h3">معا نتحدى المستحيل</h3>
        <p className="Carousel_p">أحسن وسيلة للتغلب على الصعاب اختراقها</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 image box"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcb2LvPhlpsnl7rDbgXG5Vmf1IT803dDSubg&usqp=CAU"
        alt="Second slide"
      />
  
      <Carousel.Caption>
      <h3 className="Carousel_h3">أنت الآن فى المكان الصحيح</h3>
      <p className="Carousel_p">  تريد أن تكون مبدعاً في هذه الحياة أول خطوة.. أحتك بالناجحين وأستمع لأفكارهم وحاورهم.. هذه أول خطوة للنجاح.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 image box"
        src="data:image/jpeg;base64,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"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3 className="Carousel_h3">لكل مجتهد نصيب</h3>
        <p className="Carousel_p">اذا كنت من يهوى استعراض قدراته فإنك ستكون منفراً في نظر الآخرين، أما اذا كنت تتصرف بصدق وتؤدي أي عمل بإخلاص فتأكد أنك ستقدم للجميع أقوى العروض.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  

    <main>
      {/* Hero unit */}
      <div className={classes.heroContent} class="box">
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                الموقع التعليمي العربى
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={Image} alt="hero" className={classes.image} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className={classes.heroDescription}
              style={{ display: 'flex' }}
            >
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                هذا الموقع يتمتع بمقدرة عالية فى التعليم لما له من أساليب تربوية وتعليمية لكل الأعمار وفى كل المجلات ، تصفح الموقع وستجد كل ماتريده إنطلق الى الأمام
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        window.location.href = '/#explore';
                      }}
                    >
                      استكشف الدورات
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        if (!localStorage.getItem('role')) history.push('/sign-up');
                        else history.push('/profile/me');
                      }}
                    >
                      {!localStorage.getItem('role') ? `انضم إلى مجتمعنا الآن` : `حسابي`}
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* End hero unit */}
      {res && (
        <Container className={classes.cardGrid} maxWidth="lg" id="explore">
          <Section
            title="Top Courses"
            data={res?.courses}
            viewAll="/view-all/courses"
            type="course"
          />
          <div style={{ margin: 60 }} />
          <Section title="Goals" data={res?.goals} type="goal" />
          <div style={{ margin: 60 }} />
          <Section
            title="Projects"
            data={res?.projects}
            viewAll="/view-all/projects"
            type="project"
          />
        </Container>
      )}
      {!res && !err && <CircleSpring />}
    </main>
{/* <Fades/> */}
{/* <Fullscreen_Modal/> */}
{/* <div dir="rtl"   trbidi="on">
<iframe height="500" src="https://www.dz-techs.com/java-script-html-codes/" width="600"></iframe></div> */}



    </div>
  );
}
