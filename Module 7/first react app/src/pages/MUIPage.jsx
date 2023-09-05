import BasicGrid from "../components/BasicGrid";
import CustomCard from "../components/CustomCard";
import MUIDialog from "../components/MUIDialog";
import MUIForm from "../components/MUIForm";

export default function MUIPage() {

  return (
    <div className="MUIPage">
      <h1>MUI Demo Page</h1>

      <MUIDialog text="dialog text goes here"/>

      <CustomCard title="Standalone Card"><p>Paragraph inside a custom MUI card</p></CustomCard>

      <BasicGrid /> 

      <MUIForm />
    </div>
  );
}