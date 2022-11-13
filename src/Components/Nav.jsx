import React, { useState } from "react";
import "./Nav.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img
        className="logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAADGCAMAAADFYc2jAAAAyVBMVEUAAAD///8REiQJCA8REibt7e329vb8/Pzz8/MAABjw8PD19fWLi4v4+foAABP5+fnZ2dnR0dGtra3CwsI3NzcpKSni4uK7u7tSUlJaWlpkZGSVlZXe3t4vLy8MDSEAABadnZ0XFxeDg4PLy8t+fn5vb2+zs7OMjIwAAA2ampp3d3dEREQeHh47OzsPDw8AABxKSko+P0o0NUBPT1hkZG0YGSkmJjWMjJOkpKlLTFVZWWB5eX9sbHQ3OUS9xMqBjZRwcXtKSlUiITCS5AXCAAAPtUlEQVR4nO1dC2OquBJOuoeH+OCloIBKQfDVarWtUG3vnvb//6g7Cfisiu3Wqm2+c04FDGy+mclkZhK6CDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwzHHXsj3r1J04FboiplCrp+7JCVDhCHWZCiA8dWe+H3mMtTv4tBQsYO3UvflumJivp4c26L9y0s58PzC+XRx3sXzCnpwCFtZXzro35OdtrVY+UXe+Gz3sbVxx88QJCr/DC1i4t3ZeJ/NAt34T5LnrE3XpW4Hd1bO6gDFH3V+A1RP05tuhSqtnEACJyZH9O2aBPi4sT3yw/CT0q4AZ9E/UpW9FjBfRfkAiX3pUBzMQTtalb4W/iPUkoE9l0cK/KAI0IewlE70H7PPwaTlk6jNO3a1vQwBTveS7ZM5TbJMnql+Lhn48Wipeg1LLvufWkPy743ftm1CjJi9xnGIWDprybomYjt2r7wMtenzkBhgy/IFNzz+HIMo8mA6Fcqi47I+J9SQgfh87BzbWHcfxDbihDoGTLe+vkrnYqe9tcA7Q8CLoyYYiKr5KZgpBIB5gr22XL6KKQALeg6e7gBQGenCD6XlWRmqoXUQJkZgyNg9rq9DUoAo3uFu/t+hoqLX6yYPtL+ngccF9gD60hJD4ZtcNIBeuTn2p0ScTxCVon9L3Ny5a8mo15FbikkQAtE+KRPKas3D1uZYHpGSCTM6jeVMec0fs9leBGv9GGFPHq+kwpRWQg7JIr3MrmUEFwgbORAZH5CUTs5DtO9oeHnxADHlq0LB3Q08mTfotLBs0EaxAi1TDd8TfKStZMZDsIUwkknzhD3CV+EYPhReRPun4fdQHGr1OvqI0b1NfZ3XbNNg3lze0aMhkBA4tEsEXRhXfFDCRSbDwkNfa+RaQupT+WgBDfNsAkbglWQ2wEpdHP7vp9bQkpNBJUwsgDLijz5JamEZSVToUaEE1wNz5FpAsSr+9eukuXfZppXJpzV09WDopEXrz8ghCQiKQGqYDHZ4l2Ji4DggLbZpAW6hw6LxyGuB3rr+W0q6lNO15AzUZDURiiWu8hqMWfIZJSzLo3TxCbRgEHCbZtIC182af+L61wV9LPX09td5wHhan0X4lHQzJEXHvfHIHCaB1Yh9VUzHvSBVNOHv/16L0g5Ur/bmnT7Xsp0kR8QmEbX0RJleTCz1sUkERSRorFfRrGlS438Xkc5A3k57KfMkf/HkMH5KR6JAKykusI9FpKxEcZ7ap+5CNtGy4gLEp2vODS9W/6pzngZBGx/wNtpPIwJcTubQWo8WlwwC8XY8ouY7JZLeW54nCpkDOD3kyRFfUT6I8uuhjUU/fwjeJy8PtRO3agr7Pgb2r4P3KZG4oSNSSbpZP0nDd2JxXzg7Wxuh3F/QMMgUYDvkkzejgriM5nEcKoo5cziDuMQ/2omjzKSBFBVzEHT5770fVKcy1VqHSoPEd9F3SwbmBZysjU6FcFJ+/See7m2VOCxFPFWKk67VaeQh3HV4bOx1o5MsNkhPqrtIF8L6CZY8ugwWI2EcVvpSrJComM19vxWPoCe++1l7WgAQyomy8upPkPBGSCIUnZksI6ml0u4SETS3Ji+qEsZ74CnPVzdXfRbZVKsPWBdBHAU8NgBTy8ne9RVwzR59Ph0PaOvWF+wsaLZo42Uc2/prrG1Je5JTQ+y+VVTsxes5NJvbNULW6lrVRaRQy1sJ7lLZxeCH54wh0Aa/AcDNXFgblXU2uq1ZCchnW7QLktPrNuyLRBiokIiwcMe5J9iOtQ9nzH+uZBr1DCvfrLZM+DYTzg4zumXLP3WJIXwT3PffEfjd3baXQVhvtpSdnb3QtKOai0p34CVL5vtXN1QGoHy/mt/gd7EnMtkUAtc32eypx4sc6Ta1bJbGBvFE4K7eCLBP5HMzd5LcKwKXVhwP58x8br5KL6IAJy+Sx31DZSlLJvcivrjJcK1tayDsnCnz4XDX4G6DQTu5pI1UQaYB/3KXd8h7DX0E4L+Ht8BK7lvZqH9jl8fQ/7JghsXCN1Ab6as0OFXzUlyTKm2a8E7Lvttv6zq93+EgFCwfv7fyXPEeC/xInCYtuHXVr5PWW6e5zkLaxhISGOzhKfeawzIshjEVBpGUzlQj7qAUO46vY78jE271tV7fiX65YBJ3LMnxwPhaKRY7sFvkyqlugZZI6HNx/mJbKtT5RBFAmEhCKclFOzV/8OrLvUPtC9vgzPurmrtfTdEMq4hqm1AWQgCys+KNj0v9C0weYH1D/rVWIdY0DwpwB2s7LzyJhTpW/juOEOgSFL2WP8we4+Hot6Jo+TYYx9jEvipJOWbeVpc6JEdBx4HM7Z5QvgPS19PeFvjflXjs0dZjQDMKcU/OiyOtFWebzelHMyzjUKefEBMDr0Y0yCv/BnWIfQe9zJCVf1x152zfuFkOtWwWtqxiCT+JkHxd5zs+LvECOeF/Kg7HrlLHqYsqegsgHnsfzZsGq3rx/6JdgW/C6hKK7wXuSvGuHBsepWtd/f4u/Qv+62nJt1SgCT0ya+hJVN9i1zpMj7N5ihSPEderwOVLIotyNxCh17xbZR4z46vuVTJq8c42hLTt2tV62NN5pv8sVqJe+s+zQdaSiihPaReDK54sKB8rUi3pXoHR1QTIESREofYCh39GZj9zhAPc7EuzVpbWdIV8Lez99Em1thrieYpRRzQ21wg1qYW11E7PEGZxqKpA86gJWSY26mPe5PE8eocuOYaigeR/rbfiCHNERThfyYjtIAsNKnDoj7RoVRE4jlc3j7fjdb/s0iIvXL7WgS4V0QKgVxEE+gkXOMTjfCCXOL4I/B4WDcTtKnijVcETw8SKwDDzCuqiSNzzIWMeUuN7rrUfEU3rZStY7MQmZj7eivZ89LdF4a1c0JVyVWYBEV1N0zlGAKtD2BdCwavCKhAUf1M6LnKJdS06xaJCd3jDLFR0DFK8S4oVgayow/R9f0yHlv8a01mGFR3sVrppBX99sky8YS/ZEg1ZZVQzJAN46KJ6oW8WGwhtKyyfSIMNayOeBbdFPh3hRMcCh7kvgb+naFtkbrx43z29n0HdRugo/h83323g+LxMfJSMr74s61b0EJqCoepEnHs9WwNLVPKYGD/+oDzR1t3dI8tfG37KQFWbQt4gqFqUQQRQ9A81j0kQGuFsHYkT3ullQsWp7PmVLBwJYPD2CFobuHUQ8hckdniV+Huou3ilg1Gk3Bi5KHPh0gysammulvGl4Smbof8C8feRCjKDBAU9WtMCxwewOvMHhCSFo/ExfQ8io8MlIDQIr5LhionwuVK04qXAKC/MfyDrWDV2AtAWUDDGOCLM6MXXV0WPrfLegoXQfym5wqF0uuy6myidCCI2+jhfEaYCGKyoYP1YlMAJdEBXswMxn+IXWWRNPkGH7QN9BWsDT8oMIAtCcalIQX8TlGFdshVNAPmD1MOxDX2vdHS8//Vpk0q+3kNkvcgYonyc7VnTPxnPeiQRkZBsOpxRNzjQMu3JRr6tn0JfQAN+69OUkyEcIbL28qnv4p6KipxuqwcEE0R5cit4TZNAnG3CqrRoZ9xIdAEJQRA5OfH5RoN7fCpx53megy2Kf5fpwH5luuQ3hqiBxVAam7/YX1k+gIm6RNhWOlZUfC1lLWx4qa8iFmU8swlRHBBDgymoSwKGuskgJyxem/Mwyp47uTBTaybinr2caLYHurJ/rvicsioWX8K7JOrZUa9bAI+RY9lrO5xdwDblUFKqFXGFZLdMvTflWFn1IaNsVb70YrAaCege5QB2hlqiuiGZble+8sWs/xwKk0DLYqIjJXpuDCN83sNpaLQVdHv3sFR66pL1ZDBfjVqFQaBfWjSdjY9IZ4gZngdbZnMxmFOf7gtEuZK9wkWWLjI0vc1zCW5bryCZG9plkuogUF5DkrSN7kYeUWVsH0r+431Ny2OC/PZD+5Y3+rHIXZH2VqpfVaI4LeMl2HZl2LWSlRau4OO0PDtvSdhi0iyp2UHxyZ49it3pW21wLiHx0efTLnyHvV23Hpdl9sAx73cGl5fsEWUsdW9BrFZcLb3WbrOWKZv/64mJ+gspHfBtBvu9vblMsl9GFlfmW+ODmJu6Wu7jwZi8yFvk32PeL7qk7/LW4/YD5A/vj7TI7EayPsD/v96c/Be/9qxlbYfTFH/nL9zO2OKVQqtyZLlX/Vxzi/s3gB/1WxQ0EmdbvdX/y75y93T//GVX9Bzq9FQzauw1ALrTCSw3rDsWgviP9411Lu7hKxicwqNvva7+KF7g/2+6XGAyqrrqMAiW9ELTtHznX78JgcN0HzrbdbgU9r/Ab/zdL1/1aEFi1s/8lEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBeKf3410J9fDXT1q8Ho/2Yw+hSNxY+r9aOrRmPtNDnOrV65YKT0G+NH+DFqXP2hp4/jBT30eo+GT4+LGxpw3Jj8vf8Z/Of076PSVSdGpRJotlQa251GqZO7auaQrvpcw5jkGh00vIIfyHhtolH0MP4R/OfG3zFRYxxN4+4//8xie6JOJ3H8gDz7DSM07ijG/YuvPjUfTWWqjEb+y/Thce9jj44h/FlBo9lYfLF2vZEbXuWuhsnfJrQjLZat5/RL3VHHfonRUzR7RsNxhMwcisf+BOmi9oKc16E4fcp3jOhlrD6Lr83HE+v+cVp6yBE2wxxwGeaeorfSFZDKNR/AfuEi/MkNm43xy+yh87fzMEPTqHMfAb1S8/lqFM292cL1jWMUz+LZLI47cBKN7VJjYsMxeo3xqzOeqgjpfznUQCqenX66KGkonsyGr9HzrBFN7qfm5L6LolEneoqnjdx0NozG07/3MxRNnsKp34hnz/HzTHuYaffRozIMR24pec6CSScceX9no9FV3GmA9t+6neGoAMfoHxS5yuTVQUh9yKMSUp7zf04+7pvRbKp3vfBtFmhvsTm+16Zdd6zZr29KhEbxWzzWwpEfPUXo2UbxKJrE0TB2URwjLYrfNKRt0m96/p+cOX6Z3seT+6HZ0aZjc6h1JortiuNYHSthbCDT7z4oL5HTORXtORoTB4x1HM4euvasG6PInoWzKJ5FD3F8Pw7/RjPC9PnZG+kPL/4kjEdhfB/GU637/KCP48hrJs9Z2vGj12w8RtG4NIpmw9FrZxZNcg/Dq6kdvQ1Ls3HHi4YNkOV4NkHRy8nV3xg3ck+NP0+ll9JradyYjDrQ8UZp9DaZjK/eRp3X3Lgxfnt9fHyaju8nb+Pc20vzcdT8M2rmJleN15T9Cv1GjjhQcB+NUo7EOjk4BDc6LBE3mUvO4QycylXz5Oxp9EX/pn+SD3q0OEuupBeuNv4mOL0XOykY/d8MRv834/8H/WwMfF3QAgAAAABJRU5ErkJggg=="
        alt=""
      />
      <span className="nav-logo">
        <h1>Guitar Store</h1>
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <div className="cart">
          <ShoppingCartIcon color="primary" />
        </div>
        <Link to="/">
          <Button className="btn" variant="contained">
            Home
          </Button>
        </Link>

        <Link to="/productos">
          <Button className="btn" variant="contained">
            Catalogo
          </Button>
        </Link>
        <Button className="btn" variant="contained">
          Login
        </Button>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
