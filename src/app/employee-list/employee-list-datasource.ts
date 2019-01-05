import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface EmployeeListItem {
  company: string,
  salary: number,
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: EmployeeListItem[] = [
  { id: 1, name: 'Jemin', company: 'Techvedika', salary: 25000 },
  { id: 2, name: 'Chirantan', company: 'TCS', salary: 35000 },
  { id: 3, name: 'Rishi', company: 'Microsoft', salary: 45000 },
  { id: 4, name: 'Pavitra', company: 'Google', salary: 55000 },
  { id: 5, name: 'Param', company: 'Techvedika', salary: 65000 },
  { id: 6, name: 'Suhrad', company: 'TCS', salary: 75000 },
  { id: 7, name: 'Bhargav', company: 'Microsoft', salary: 85000 },
  { id: 8, name: 'Sarvajeet', company: 'Google', salary: 95000 },
  { id: 9, name: 'Tarang', company: 'Microsoft', salary: 105000 },
  { id: 10, name: 'Meet', company: 'Techvedika', salary: 115000 },
  { id: 11, name: 'Jensi', company: 'TCS', salary: 125000 },

];

/**
 * Data source for the EmployeeList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EmployeeListDataSource extends DataSource<EmployeeListItem> {
  data: EmployeeListItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<EmployeeListItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: EmployeeListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: EmployeeListItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
