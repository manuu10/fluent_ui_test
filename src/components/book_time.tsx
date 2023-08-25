import {
  Button,
  Combobox,
  useId,
  Option,
  Spinner,
  SpinButton,
  useToastController,
  Toast,
  ToastTitle,
  Toaster,
} from "@fluentui/react-components";
import { CheckmarkCircle24Filled } from "@fluentui/react-icons";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { demoProjects, demoTasks } from "../data/demo_data";
import { useState } from "react";

export function BookTimePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h4>Projekt</h4>
      <Combobox placeholder="Projekt auswählen">
        {demoProjects.map((option) => {
          return (
            <Option key={option.nr} text={option.name}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h3>{option.name}</h3>
                <span>{option.description}</span>
              </div>
            </Option>
          );
        })}
      </Combobox>
      <h4>Aufgabe</h4>
      <Combobox placeholder="Aufgabe auswählen">
        {demoTasks.map((option) => {
          return (
            <>
              <Option
                key={option.nr}
                text={option.name}
                checkIcon={<CheckmarkCircle24Filled primaryFill="red" />}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <h3>{option.name}</h3>
                  <span>{option.description}</span>
                </div>
              </Option>
              <div style={{ width: "100%", borderBottom: "1px solid grey" }} />
            </>
          );
        })}
      </Combobox>
      <h4>Datum</h4>
      <DatePicker placeholder="Leistungsdatum auswählen" />
      <h4>Stunden</h4>
      <SpinButton />
      <FakeSubmitButton />
    </div>
  );
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
function FakeSubmitButton() {
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);
  const [isLoading, setIsLoading] = useState(false);
  const onPress = async () => {
    setIsLoading(true);
    await sleep(2000);
    setIsLoading(false);
    dispatchToast(
      <Toast>
        <ToastTitle>Buchung durchgeführt</ToastTitle>
      </Toast>,
      { position: "top-start", intent: "success" }
    );
  };
  return (
    <>
      <Toaster toasterId={toasterId} />
      <Button
        appearance="primary"
        size="large"
        disabled={isLoading}
        icon={isLoading ? <Spinner size="extra-small" /> : null}
        iconPosition="before"
        onClick={onPress}
      >
        Buchen
      </Button>
    </>
  );
}
