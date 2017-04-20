import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'paginate' })
export class PaginatePipe implements PipeTransform {

  transform(value: any[], args) {
    // pagination control ensures currentPage > 0
    if (value) {
      return value.slice(args.itemsPerPage * (args.currentPage - 1), args.itemsPerPage * args.currentPage);
    }
  }
}