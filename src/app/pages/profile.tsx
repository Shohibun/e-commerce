import Image from "next/image";
import user from "../../../public/images/user.jpeg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ProfileMain() {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-8/12 bg-white rounded-lg border-2 shadow-xl p-8">
        <Image
          src={user}
          width={600}
          height={600}
          alt="user"
          className="rounded-lg mx-auto"
        />

        <div className="mt-14">
          <div className="grid grid-cols-12 gap-4">
            {/* Username */}
            <div className="col-span-2 my-auto">
              <Label htmlFor="username">Username:</Label>
            </div>
            <div className="col-span-10">
              <Input type="text" value={"SongMin"} placeholder="Username" />
            </div>

            {/* Full Name */}
            <div className="col-span-2 my-auto">
              <Label htmlFor="fullname">Full Name:</Label>
            </div>
            <div className="col-span-10">
              <Input
                type="text"
                value={"Baek Song Min"}
                placeholder="Full Name"
              />
            </div>

            {/* Email */}
            <div className="col-span-2 my-auto">
              <Label htmlFor="email">Email:</Label>
            </div>
            <div className="col-span-10">
              <Input
                type="email"
                value={"baeksongmin@gmail.com"}
                placeholder="username@gmail.com"
              />
            </div>

            {/* Nomer Telepon */}
            <div className="col-span-2 my-auto">
              <Label htmlFor="phonenumber">Phone Number:</Label>
            </div>
            <div className="col-span-10">
              <Input
                type="text"
                value={"0912345678"}
                placeholder="Phone Number"
              />
            </div>

            {/* Tanggal Lahir */}
            <div className="col-span-2 my-auto">
              <Label htmlFor="dateofbirth">Date of Birth:</Label>
            </div>
            <div className="col-span-10">
              <Input
                type="text"
                value={"18 January 2000"}
                placeholder="Date of Birth"
              />
            </div>

            {/* Jenis Kelamin */}
            <div className="col-span-2 my-auto">
              <Label htmlFor="gender">Gender:</Label>
            </div>
            <div className="col-span-10">
              <RadioGroup
                defaultValue="option-one"
                className="flex justify-between w-2/12"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one" className="font-normal">
                    Female
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two" className="font-normal">
                    Male
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Alamat */}
            <div className="col-span-2 my-auto">
              <Label htmlFor="address">Address:</Label>
            </div>
            <div className="col-span-10">
              <Input
                type="text"
                value={"003/001, Dusun Ledok, Sidomukti, Mayang, Jember"}
                placeholder="Address"
              />
            </div>

            {/* Kode Poss */}
            <div className="col-span-2 my-auto">
              <Label htmlFor="postalcode">Postal Code:</Label>
            </div>
            <div className="col-span-10">
              <Input type="text" value={"68182"} placeholder="Postal Code" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
