import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { Icons } from '@/components/ui/icons';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

const sources = [
  {
    color: 'theme.palette.custom.pieMsDefender',
    icon: (theme: Theme) => <Icons.windows sx={{ color: theme.palette.custom.msDefender }} style={{ width: '40px', height: '40px' }} />,
    count: 428,
    name: "Microsoft Defender",
    bar: (theme: Theme) => theme.palette.custom.msDefender,
  },
  {
    color: 'theme.palette.custom.pieArcticWolf',
    icon: (theme: Theme) => <Icons.arcticWolf sx={{ color: theme.palette.custom.arcticWolfIcon }} style={{ width: '40px', height: '40px' }} />,
    count: 119,
    name: "Arctic Wolf",
    bar: (theme: Theme) => theme.palette.custom.arcticWolfBar,
  },
];

const SourceSummary: React.FC = () => {
  const theme = useTheme();
  const total = sources.reduce((sum, s) => sum + s.count, 0);
  const chartData = [
    { value: sources[0].count, color: theme.palette.custom.pieMsDefender },
    { value: sources[1].count, color: theme.palette.custom.pieArcticWolf },
  ];
  return (
    <Box display="flex" gap={"22px"} flexDirection={"column"} height="100%">
      {/* Left: Source List */}
      <Typography fontWeight={700} color={theme.palette.secondary.main} fontSize={15}>
        Finding Per Source
      </Typography>
      <Box display="flex" flexWrap={"wrap"} justifyContent="space-between" flex={1}>
        <Box flex={1}>
          <Stack spacing={4}>
            {sources.map((src, idx) => (
              <Box key={idx} display="flex" alignItems="center" gap={"20px"}>
                {/* Vertical bar */}
                <Box sx={{ width: 6, height: 48, bgcolor: src.bar(theme) }} />
                <Box display="flex" alignItems="center" gap={"11px"}>
                  {/* Icon */}
                  {src.icon(theme)}
                  {/* Number */}
                  <Typography fontWeight={700} fontSize={35} color={theme.palette.custom.textSourceNumber} sx={{ textAlign: 'right' }}>
                    {src.count}
                  </Typography>
                  {/* Name */}
                  <Box>
                    <Typography color={theme.palette.secondary.main} fontWeight={400} fontSize={14} lineHeight={"20px"}>
                      {src.name}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
        {/* Right: Donut Chart */}
        <Box flexShrink={0} ml={4} position="relative" width={140} height={140} display="flex" alignItems="center" justifyContent="center">
          <PieChart
            series={[
              {
                data: chartData,
                innerRadius: 60,
                outerRadius: 70,
                cornerRadius: 10,
                paddingAngle: 0,
              },
            ]}
            width={140}
            height={140}
            hideLegend
          />
          <Box position="absolute" top={0} left={0} width={140} height={140} display="flex" alignItems="center" justifyContent="center">
            <Typography fontWeight={600} fontSize={35} color={theme.palette.custom.textSourceNumber}>
              {total}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SourceSummary; 