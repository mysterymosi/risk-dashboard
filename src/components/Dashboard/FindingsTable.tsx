import { DataGridWithFilters, Icons } from '@/components/ui';
import { filterOptions, findings } from '@/constants';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getFindingsColumns } from '@/columns';

export default function FindingsTable() {
  const theme = useTheme();

  const columns = getFindingsColumns(theme);

  return (
    <DataGridWithFilters
      columns={columns}
      rows={findings}
      filterOptions={filterOptions}
      searchPlaceholder="Search"
      getFilterValue={(row, key) => {
        if (key === 'asset') return row.asset.name;
        return row[key as keyof typeof row] as string;
      }}
      getSearchText={(row) => [row.finding, row.asset?.name ?? '', row.software]}
    >
      <Box
        sx={{
          borderRadius: '11px',
          boxShadow: '0px 2.222px 3.333px 0px rgba(0,0,0,0.05)',
          py: "10px",
          px: "10px",
          minWidth: 45,
          minHeight: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: theme.palette.background.paper,
        }}
      >
        <Icons.lucideSetting sx={theme => ({ color: theme.palette.custom.grayScale6, fontSize: 15 })} />
      </Box>
    </DataGridWithFilters>
  );
} 