import {
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import { demoBookings } from "../data/demo_data";

export function BookingsList() {
  const values = demoBookings();
  const columns = ["Datum", "Zeit", "Name", "Projekt", "Aufgabe", "Kommentar"];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((e) => (
            <TableHeaderCell>{e.toUpperCase()}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {values.map((e) => (
          <TableRow>
            <TableCell>
              <TableCellLayout>{e.date.toLocaleDateString()}</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>{e.time} H</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>{e.name}</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>{e.project.name}</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>{e.task.name}</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>{e.comment}</TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
