import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.dark,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  mainAbout: {
    margin: theme.spacing(3, 0),
  },
  leftMargin1st: {
    marginLeft: 10,
  },
  leftMargin2nd: {
    marginLeft: 20,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" class="box">
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: 80, marginBottom: 15 }}>
        <Typography component="h1" variant="h2" class="box">
        تحتاج مساعدة!
        </Typography >
        <Typography paragraph variant="body1" className={classes.mainAbout } class="boxf1" >
        نحن دائما معك لا داعي للقلق &apos;، كن سعيدا :)
        </Typography>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        كيف يمكنني أن أقدم المساعدة
                </Grid>
        <Grid item xs={12} className={classes.leftMargin1st}>
        مشكلة متعلقة بالحساب؟
                </Grid>
        <Grid item xs={12} className={classes.leftMargin1st}>
        القضايا المتعلقة بالدفع؟
                </Grid>
        <Grid item xs={12} className={classes.leftMargin1st}>
        مسألة ذات صلة بالدورة؟
                </Grid>
        <Grid item xs={12} className={classes.leftMargin2nd}>
          يمكنك التواصل معنا على
          <Typography color="primary" display="inline">
            {' '}
            01069712052{' '}
          </Typography>
          من 10 ص الى 10 م
        </Grid>
        <Grid item xs={12} className={classes.leftMargin1st} style={{ marginTop: 5 }}>
        أي مشكلة في الموقع
                </Grid>
        <Grid item xs={12} className={classes.leftMargin2nd}>
        تقرير الى <Link href="agayedm@outlook.com">عبدالجيد محمد</Link>
        </Grid>
      </Grid>
    </Container>
  );
};
