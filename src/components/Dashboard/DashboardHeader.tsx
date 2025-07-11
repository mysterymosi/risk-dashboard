import React from 'react';
import { Paper, Grid, useMediaQuery, useTheme } from '@mui/material';
import { SeveritySummary, VulnerableAssets, SourceSummary } from '@/components/Dashboard';

const DashboardHeader: React.FC = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Paper elevation={0} sx={{ p: { xs: 2, md: '20px' }, borderRadius: '11px', boxShadow: '0px 2.222px 3.333px 0px rgba(0, 0, 0, 0.05)' }}>
      <Grid container alignItems="stretch" spacing={isMdUp ? '30px' : 2} direction={isMdUp ? 'row' : 'column'}>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            borderRight: isMdUp ? '1px solid #E2E2EA' : 'none',
            pr: isMdUp ? '30px' : 0,
            mb: isMdUp ? 0 : 2,
          }}
        >
          <SeveritySummary />
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            borderRight: isMdUp ? '1px solid #E2E2EA' : 'none',
            pr: isMdUp ? '30px' : 0,
            mb: isMdUp ? 0 : 2,
          }}
        >
          <VulnerableAssets />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SourceSummary />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DashboardHeader; 