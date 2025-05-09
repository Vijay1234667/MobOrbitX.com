import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

// Pages
import SignInPage from './pages/SignInPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import ReportPage from './component/ReportsPage';
import DashboardPage from './pages/DashboardPage';
import SideWithNav from './layout/SideWithNav';
import ArticleFormPage from './pages/ArticleFormPage';
import AssignUserPage from './pages/AssignUserPage';
import ControlPanelPage from './pages/ControlPanelPage';
import InventoriesOverview from './pages/InventoriesOverview';
import ManageCampaignPage from './pages/ManageCampaignPage';
import ArticleEditorsPage from './pages/ArticleEditorsPage';
import ActiveAlertsPage from './pages/ActiveAlertsPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import SwitchAccountPage from './pages/SwitchAccountPage';
import PerformanceReportPage from './pages/PerformanceReportPage';
import FacebookCEBO from './pages/FacebookCEBO';
import Supermetricslist from './pages/Supermetricslist';
import AccountManagementPage from './pages/AccountManagementPage';
import DomainsManagementPage from './pages/DomainsManagementPage';
import SearchTokenPage from './pages/SearchTokenPage';
import ManageAdAccount from './pages/ManageAdAccount';

import System1ReportOverview from './pages/systemreports1/System1ReportOverview';
import System1ReportHourly from './pages/systemreports1/System1ReportHourly';
import System1ReportHourlyCampaign from './pages/systemreports1/System1ReportHourlyCampaign';
import System1TimeframeReport from './pages/systemreports1/System1Timeframe';
import System1Timeframe from './pages/systemreports1/System1Timeframe';
import System1Campaign from './pages/systemreports1/System1Campaign';
import System1DSP from './pages/systemreports1/System1DSP';
import System1ChillofyCampaignFB from './pages/system1chillofy/System1ChillofyCampaignFB';
import System1ChillofyDsp from './pages/system1chillofy/System1ChillofyDsp';
import System1ChillofyHourly from './pages/system1chillofy/System1ChillofyHourly';
import System1ChillofyHourlyCampaign from './pages/system1chillofy/System1ChillofyHourlyCampaign';
import System1ChillofyOverview from './pages/system1chillofy/System1ChillofyOverview';
import System1ChillofyTimeframe from './pages/system1chillofy/System1ChillofyTimeframe';
import System1ChillofyCampaign from './pages/system1chillofy/System1ChillofyCampaignFB';
import AdscomOverview from './pages/AdscomReports/AdscomOverview';
import AdscomHourly from './pages/AdscomReports/AdscomHourly';
import AdscomHourlyCampaign from './pages/AdscomReports/AdscomHourlyCampaign';
import AdscomTimeframe from './pages/AdscomReports/AdscomTimeframe';
import AdscomCampaignFB from './pages/AdscomReports/AdscomCampaignFB';
import AdscomCountry from './pages/AdscomReports/AdscomCountry';
import AdscomTerm from './pages/AdscomReports/AdscomTerm';

function AppContent() {
  const location = useLocation();

  const noSidebarRoutes = ['/login', '/about', '/contact'];

  const shouldShowSidebar = !noSidebarRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {shouldShowSidebar && <SideWithNav />}
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/articleform" element={<ArticleFormPage />} />
        <Route path="/assignuser" element={<AssignUserPage />} />
        <Route path="/controlpanel" element={<ControlPanelPage />} />
        <Route path="/inventoriesoverview" element={<InventoriesOverview />} />
        <Route path="/managecampaign" element={<ManageCampaignPage />} />
        <Route path="/articleEdit" element={<ArticleEditorsPage />} />
        <Route path="/activeAlert" element={<ActiveAlertsPage />} />
        <Route path="/accountmangement" element={<AccountManagementPage />} />
        <Route path="/changePassword" element={<ChangePasswordPage />} />
        <Route path="/switchAccount" element={<SwitchAccountPage />} />
        <Route path="/performanceReport" element={<PerformanceReportPage />} />
        <Route path="/cebo" element={<FacebookCEBO />} />
        <Route path="/supermetricslist" element={<Supermetricslist />} />
        <Route path="/domains" element={<DomainsManagementPage />} />
        <Route path="/searchtoken" element={<SearchTokenPage />} />
        <Route path="/manageadaccount" element={<ManageAdAccount />} />

        {/* system1ReportPages */}
        <Route path="/systemreport/overview" element={<System1ReportOverview />} />
        <Route path="/systemreport/hourly" element={<System1ReportHourly />} />
        <Route path="/systemreport/hourlycampaign" element={<System1ReportHourlyCampaign />} />
        <Route path="/systemreport/timeframereport" element={<System1Timeframe />} />
        <Route path="/systemreport/campaign" element={<System1Campaign />} />
        <Route path="/systemreport/dsp" element={<System1DSP />} />

        {/* InmobiRSOCPages */}

        {/* System1ChillofyPages */}
        <Route path="/system1/overview" element={<System1ChillofyOverview />} />
        <Route path="/system1/hourly" element={<System1ChillofyHourly />} />
        <Route path="/system1/hourlycampaign" element={<System1ChillofyHourlyCampaign />} />
        <Route path="/system1/timeframe" element={<System1ChillofyTimeframe />} />
        <Route path="/system1/campaign" element={<System1ChillofyCampaignFB />} />
        <Route path="/system1/dsp" element={<System1ChillofyDsp />} />

          {/* AdscomReportsPages */}
          <Route path="/adscom/overview" element={<AdscomOverview />} />
          <Route path="/adscom/hourly" element={<AdscomHourly />} />
          <Route path="/adscom/hourlycampaign" element={<AdscomHourlyCampaign />} />
          <Route path="/adscom/timeframe" element={<AdscomTimeframe />} />
          <Route path="/adscom/campaign" element={<AdscomCampaignFB />} />
          <Route path="/adscom/country" element={<AdscomCountry />} />
          <Route path="/adscom/term" element={<AdscomTerm />} />



      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
