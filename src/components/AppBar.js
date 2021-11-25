import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import { useHistory, useLocation } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import InfoIcon from '@material-ui/icons/Info';
import ClassIcon from '@material-ui/icons/Class';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CategoryIcon from '@material-ui/icons/Category';
import HelpIcon from '@material-ui/icons/Help';
import EditIcon from '@material-ui/icons/Edit';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Divider, Button } from '@material-ui/core';
import BugReportIcon from '@material-ui/icons/BugReport';
import usePost from '../hooks/usePost';
import '../index.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const [res, err, post] = usePost();

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    if (res && !err) localStorage.clear();
  }, [res, err]);

  return (
    <>
      <div className={classes.root} class="boxf3">
        <AppBar position="relative" class="box ">
          <Toolbar className="MuiAppBar-colorPrimary1">









            
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link color="inherit" underline="none" button onClick={() => history.push('/')} selected={location.pathname === '/'} >
                الموقع التعليمى العربى
              </Link>
            </Typography>
            <iframe name="I1" marginwidth="1" marginheight="1" height="30" width="60%" scrolling="no" border="0" frameborder="0" src="http://news.bbc.co.uk/hi/arabic/news/ticker.stm"></iframe>

            <div>
              {!localStorage.getItem('accessToken') && (
                <Button variant="outlined" color="inherit" onClick={() => history.push('/sign-up')}>
                  تسجيل مستخدم
                </Button>
              )}
              <IconButton
                color="inherit"
                onClick={() => {
                  if (localStorage.getItem('accessToken')) history.push('/profile/me');
                  else history.push('/sign-in');
                }}
              >
                <AccountCircle />
              </IconButton>
            </div>



            <a href="javascript:window.print()">اطبع هذه الصفحة</a>

          </Toolbar>
          <div align="center" class="boxf1">
      <table border="0" width="100%" height="100%" >
      <tr><td class="alt1" colspan="3"><b>
      <font size="4" color="000000">
      <marquee direction="right" width="100%" height="100%"direction="right" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="5" class="boxf1">                                  
       أهلا بكم فى الموقع التعليمي العربى.................&&..................... نتمنى لكم الإستفادة الكاملة...................&&......................... ننتظر إستفسارتكم وإقتراحاتكم على رقم  :   +201069712052
               </marquee></font></b></td>
       {/* <a href="https://www.now-time.com/City1.html"  class="_time_link" target="_blank"></a><span id="thetimenow" ></span> */}
       {/* <iframe src="https://www.now-time.com/widgetclock/justnumber.php?id=1&size=23&color=1833AB&format=1&thedatein=4&backcolor=F2F2F2" frameBorder="0"></iframe> */}

       <div class="timediv" id="main_links" >
         
<a href="https://www.now-time.com/City1.html" target="_blank"></a>

<span id="main_time" class="main_time" data-tz="" ></span>الخميس 25 تشرين ثاني/نوفمبر 2021
</div>
       </tr></table></div>



        </AppBar>
        
      </div>
      
      <Drawer open={openDrawer} onClose={toggleDrawer}  >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          
        >
              

          <List >
            <ListItem button onClick={() => history.push('/')}
             selected={location.pathname === '/'}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="الصفحةالرئيسية" />
            </ListItem>
            {!localStorage.getItem('accessToken') && (
              <>
                <ListItem
                  button
                  onClick={() => history.push('/AddCourse')}
                  selected={location.pathname === '/AddCourse'}
                >
                  <ListItemIcon>
                    <LockOpenIcon />
                  </ListItemIcon>
                  <ListItemText primary="إضافة دورة جديد" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => history.push('/AddNode')}
                  selected={location.pathname === '/AddNode'}
                >
                  <ListItemIcon>
                    <LockOpenIcon />
                  </ListItemIcon>
                  <ListItemText primary="اضافة درس جديد" />
                </ListItem>
              </>
            )}
            {localStorage.getItem('accessToken') && (
              <ListItem
                button
                onClick={() => history.push('/profile/me')}
                selected={location.pathname === '/profile/me'}
              >
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>

                <ListItemText primary="My Profile" />
              </ListItem>
            )}
            <ListItem
              button
              onClick={() => history.push('/Coursat')}
              selected={location.pathname === '/Coursat'}
            >
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <ListItemText primary="قائمةالدورات" />
            </ListItem>
            <ListItem 
              button 
              onClick={() => history.push('/Edit')}
              selected={location.pathname === '/Edit'}
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="إضافة موضوع جديد" />
            </ListItem> 
            {/* <ListItem
              button
              onClick={() => history.push('/view-all/goals')}
              selected={location.pathname === '/view-all/goals'}
            >
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Goals" />
            </ListItem> */}
 
            {localStorage.getItem('role') === 'admin' && (
              <>
                <Divider />
                <ListItem
                  button
                  onClick={() => history.push('/admin')}
                  selected={location.pathname === '/admin'}
                >
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Admin Panel" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => history.push('/editor')}
                  selected={location.pathname === '/editor'}
                >
                  <ListItemIcon>
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText primary="Editor" />
                </ListItem>
              </>
            )}
            <Divider />
            <ListItem
              button
              onClick={() => history.push('/NavBarm')}
              selected={location.pathname === '/NavBarm'}
            >
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem
              button
              onClick={() => history.push('/help')}
              selected={location.pathname === '/help'}
            >
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItem>

            {/* <ListItem
              button
              onClick={() => history.push('/Card_Title')}
              selected={location.pathname === '/Card_Title'}
            >
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Card_Title" />
            </ListItem> */}

            {/* <ListItem
              button
              onClick={() => history.push('/Cards')}
              selected={location.pathname === '/Cards'}
            >
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Cards" />
            </ListItem> */}


            {/* <ListItem
              button
              onClick={() => history.push('/Cards')}
              selected={location.pathname === '/Cards'}
            >
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Cards" />
            </ListItem> */}

            {/* <ListItem
              button
              onClick={() => history.push('/NavBarm')}
              selected={location.pathname === '/NavBarm'}
            >
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="NavBarm" />
            </ListItem> */}

            {/* <ListItem
              button
              onClick={() => history.push('/C_arousel')}
              selected={location.pathname === '/C_arousel'}
            >
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="C_arousel" />
            </ListItem> */}

            {/* <ListItem
              button
              onClick={() => history.push('/NavBar')}
              selected={location.pathname === '/NavBar'}
            >
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Navbar" />
            </ListItem> */}














            
            {/* <ListItem 
              button
              onClick={() => window.open('https://meghoshpritam.netlify.app', '_blank')}
              selected={location.pathname === '/course'}
            >
              <ListItemIcon>
                <BugReportIcon />
              </ListItemIcon>
              <ListItemText primary="Report a Bug" />
            </ListItem> */}
            {localStorage.getItem('accessToken') && (
              <>
                <Divider />
                <ListItem
                  button
                  onClick={() => {
                    post('/auth/sign-out', { refreshToken: localStorage.getItem('refreshToken') });
                  }}
                >
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign Out" />
                </ListItem>
              </>
            )}
          </List>
        </div> 
      </Drawer>
      
      
    </>
    
  );
}
