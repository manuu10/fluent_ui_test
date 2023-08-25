import {
  Button,
  SpinButton,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import { demoBookings } from "../data/demo_data";
import { useState } from "react";

export function BookingsList() {
  const [sampleAmount, setSampleAmount] = useState(10);
  const values = demoBookings(sampleAmount);
  const columns = ["Datum", "Zeit", "Name", "Projekt", "Aufgabe", "Kommentar"];
  return (
    <>
      <h3>Sample Items</h3>
      <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
        <SpinButton
          value={sampleAmount}
          onChange={(_, data) =>
            data.value != null && setSampleAmount(data.value)
          }
        />
        <Button
          appearance="primary"
          onClick={() => setSampleAmount((e) => e + 100)}
        >
          Add 100
        </Button>
        <Button
          appearance="primary"
          onClick={() => setSampleAmount((e) => e + 10)}
        >
          Add 10
        </Button>
        <Button onClick={() => setSampleAmount(10)}>Reset</Button>
        <Button
          appearance="primary"
          onClick={() => setSampleAmount((e) => e - 10)}
        >
          Sub 10
        </Button>
        <Button
          appearance="primary"
          onClick={() => setSampleAmount((e) => e - 100)}
        >
          Sub 100
        </Button>
      </div>
      <div style={{ height: 20 }} />
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
    </>
  );
}
