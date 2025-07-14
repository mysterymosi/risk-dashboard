import { useState, useMemo } from 'react';
import { DataGrid, type GridColDef, type GridValidRowModel } from '@mui/x-data-grid';
import { Box, TextField, MenuItem, Select, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { Icons } from './icons';

interface DataGridWithFiltersProps<T extends GridValidRowModel> {
  columns: GridColDef<T>[];
  rows: T[];
  filterOptions: Record<string, string[]>;
  filterKeys?: string[];
  searchPlaceholder?: string;
  getFilterValue?: (row: T, key: string) => string | boolean | undefined;
  getSearchText?: (row: T) => string[];
  pageSizeOptions?: number[];
  rowHeight?: number;
  columnHeaderHeight?: number;
  sx?: object;
  children?: React.ReactNode;
}

export function DataGridWithFilters<T extends GridValidRowModel>(props: DataGridWithFiltersProps<T>) {
  const {
    columns,
    rows,
    filterOptions,
    filterKeys = Object.keys(filterOptions),
    searchPlaceholder = 'Search',
    getFilterValue,
    getSearchText,
    pageSizeOptions = [5, 10, 25],
    rowHeight = 73,
    columnHeaderHeight = 64,
    sx = {},
    children,
  } = props;

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

  const searchIconSize = isXs ? 14 : 20

  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    filterKeys.forEach((key) => {
      initial[key] = '';
    });
    return initial;
  });

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      // Search filter
      if (search) {
        const searchFields = getSearchText
          ? getSearchText(row)
          : Object.values(row).map((v) => (typeof v === 'string' ? v : ''));
        if (!searchFields.some((field) => field.toLowerCase().includes(search.toLowerCase()))) {
          return false;
        }
      }
      // Dropdown filters
      for (const key of filterKeys) {
        const filterValue = filters[key];
        if (filterValue) {
          let rowValue: unknown;
          if (getFilterValue) {
            rowValue = getFilterValue(row, key);
          } else {
            rowValue = (row as Record<string, unknown>)[key];
          }
          if (key === 'criticalAsset') {
            if ((filterValue === 'Yes') !== !!rowValue) return false;
          } else if (rowValue !== filterValue) {
            return false;
          }
        }
      }
      return true;
    });
  }, [search, filters, rows, filterKeys, getFilterValue, getSearchText]);

  const defaultSx = (theme: Theme): SxProps<Theme> => ({
    border: 0,
    bgcolor: theme.palette.background.paper,
    borderRadius: '10px',
    boxShadow: '0px 2.222px 3.333px 0px rgba(0,0,0,0.05)',
    fontFamily: 'inherit',
    '& .MuiDataGrid-columnHeader': {
      bgcolor: theme.palette.background.paper,
      fontWeight: 500,
      fontSize: isXs ? 10 : isSm ? 11 : 12,
      color: theme.palette.text.secondary,
      textTransform: 'uppercase',
      px: isXs ? '8px' : isSm ? '16px' : '24px',
      borderBottom: `1px solid ${theme.palette.custom.borderHeader} !important`,
    },
    '& .MuiDataGrid-row': {
      fontSize: isXs ? 12 : isSm ? 13 : 14,
      color: theme.palette.secondary.main,
    },
    '& .MuiDataGrid-cell': {
      borderBottom: `1px solid ${theme.palette.custom.borderHeader}`,
      borderTop: '0px solid',
      px: isXs ? '8px' : isSm ? '16px' : '24px',
      color: theme.palette.secondary.main,
    },
    '& .MuiDataGrid-footerContainer': {
      bgcolor: theme.palette.background.paper,
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
  });

  return (
    <>
      {/* Filters */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: { xs: '6px', sm: '8px', md: '10px' },
          mb: { xs: '10px', sm: '16px', md: '20px' },
          overflowX: 'auto',
          pb: 0,
          '::-webkit-scrollbar': { height: 0 },
          bgcolor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Box display="flex" alignItems="center" gap={{ xs: '6px', sm: '8px', md: '10px' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: theme.palette.background.paper,
              borderRadius: '11px',
              boxShadow: '0px 2.222px 3.333px 0px rgba(0,0,0,0.05)',
              px: { xs: '8px', sm: '12px', md: '16.67px' },
              minWidth: { xs: 120, sm: 180, md: 250 },
              fontWeight: 500,
              fontSize: isXs ? 14 : isSm ? 16 : 18,
              color: '#0A1857',
              position: 'relative',
            }}
          >
            <TextField
              placeholder={searchPlaceholder}
              size="medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant="standard"
              slotProps={{
                input: {
                  disableUnderline: true,
                  endAdornment: <SearchIcon sx={theme => ({ color: theme.palette.text.secondary, fontSize: searchIconSize })} />, // icon size is fine
                },
              }}
              sx={{
                bgcolor: 'transparent',
                borderRadius: 0,
                fontWeight: 500,
                fontSize: isXs ? 14 : isSm ? 16 : 18,
                color: '#0A1857',
                width: '100%',
                '& .MuiInputBase-input': {
                  p: 0,
                  fontWeight: 500,
                  fontSize: isXs ? 14 : isSm ? 16 : 18,
                  color: '#0A1857',
                  textAlign: 'left',
                  height: isXs ? '32px' : isSm ? '36px' : '40px',
                },
                '& .MuiInputBase-root': {
                  pr: 0,
                },
                '& .MuiInputAdornment-root': {
                  mr: 0,
                },
                '& input::placeholder': {
                  color: theme.palette.secondary.main,
                  opacity: 1,
                  fontWeight: 400,
                  fontSize: isXs ? 12 : isSm ? 13 : 14,
                },
              }}
            />
          </Box>
          {filterKeys.map((key) => (
            <Box
              key={key}
              sx={{
                borderRadius: '11px',
                boxShadow: '0px 2.222px 3.333px 0px rgba(0,0,0,0.05)',
                px: { xs: '8px', sm: '10px', md: '15px' },
                fontWeight: 500,
                fontSize: isXs ? 12 : isSm ? 14 : 15,
                color: theme.palette.secondary.main,
                display: 'flex',
                alignItems: 'center',
                bgcolor: theme.palette.background.paper,
              }}
            >
              <Select
                value={filters[key]}
                onChange={(e) => setFilters((f) => ({ ...f, [key]: e.target.value }))}
                displayEmpty
                size="small"
                variant="standard"
                disableUnderline
                IconComponent={Icons.chevronDown}
                sx={{
                  bgcolor: 'transparent',
                  borderRadius: 0,
                  color: theme.palette.secondary.main,
                  width: '100%',
                  height: isXs ? '32px' : isSm ? '36px' : '40px',
                  '& .MuiSelect-select': {
                    p: 0,
                    fontWeight: 400,
                    fontSize: isXs ? 11 : isSm ? 12 : 13,
                    color: theme.palette.secondary.main,
                  },
                  '& .MuiSelect-icon': {
                    color: theme.palette.text.disabled,
                    fontSize: isXs ? 14 : 16,
                  },
                }}
              >
                <MenuItem value="" sx={{ color: theme.palette.secondary.main, fontWeight: 500, fontSize: isXs ? 12 : isSm ? 14 : 15 }}>
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())}
                </MenuItem>
                {filterOptions[key].map((opt) => (
                  <MenuItem key={opt} value={opt} sx={{ color: theme.palette.secondary.main, fontWeight: 500, fontSize: isXs ? 12 : isSm ? 14 : 15 }}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          ))}
        </Box>
        {children}
      </Box>
      {/* DataGrid */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSizeOptions={pageSizeOptions}
          rowHeight={rowHeight}
          columnHeaderHeight={columnHeaderHeight}
          initialState={{
            pagination: { paginationModel: { pageSize: pageSizeOptions[1] || 10, page: 0 } },
          }}
          sx={theme => ({ ...defaultSx(theme), ...sx })}
        />
      </Box>
    </>
  );
} 