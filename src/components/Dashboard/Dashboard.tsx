import React from 'react';
import { Grid } from '@mui/material';
import { DashboardHeader, FindingsTable } from '@/components/Dashboard';
import { DashboardShell } from '@/components/layouts';


const Dashboard: React.FC = () => {
  return (
    <DashboardShell>
      <Grid size={{ xs: 12 }}>
        <DashboardHeader />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <FindingsTable />
      </Grid>
    </DashboardShell>
  );
};

export default Dashboard; 