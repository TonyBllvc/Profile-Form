import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardMedia,
} from "@mui/material";

import imageProfile from "../assets/christopher.jpg";

const MyProfileSettings: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [aboutMe, setAboutMe] = useState<string>("");
  const [brandName, setBrandName] = useState<string>("");
  const [facebook, setFacebook] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [linkedin, setlinkedin] = useState<string>("");
  const [tiktok, setTikTok] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  

  const textFieldSx = { borderRadius: ".5rem" };
  return (
    <Container maxWidth="lg">
      <Box
        component="section"
        sx={{
          mt: 4,
          border: "1px solid #a1c1d4",
          borderRadius: ".5rem",
          p: "30px",
        }}
      >
        <Box marginBottom="20px">
          <Typography variant="h6" component="h1" gutterBottom>
            My Profile Settings
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Profile Picture</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Card sx={{ maxWidth: 150 }}>
                <CardMedia
                  component="img"
                  image={imageProfile}
                  alt="Profile Picture"
                />
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Full Name</Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                sx={textFieldSx}
                value={firstName}
                placeholder="Sarah"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                sx={textFieldSx}
                value={lastName}
                placeholder="James"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Email Address</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                sx={textFieldSx}
                type="email"
                value={email}
                placeholder="sarahjames@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Mobile Number</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                sx={textFieldSx}
                type="number"
                placeholder="+357 99 684057"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">What describes you best</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <FormControl fullWidth>
                <InputLabel>Please select</InputLabel>
                <Select
                  labelId="gender-label"
                  value={description}
                  onChange={(e) => setDescription(e.target.value as string)}
                  sx={textFieldSx}
                >
                  <MenuItem value="" disabled>
                    {" "}
                    Select Gender
                  </MenuItem>
                  <MenuItem value="happy">Happy </MenuItem>
                  <MenuItem value="sad">Sad</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Gender</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <FormControl fullWidth>
                <InputLabel>Male</InputLabel>
                <Select
                  labelId="gender-label"
                  value={gender}
                  onChange={(e) => setGender(e.target.value as string)}
                  sx={textFieldSx}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={4}>
              <Typography variant="body1">About Me</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                placeholder="About me"
                sx={textFieldSx}
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Brand Name</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                sx={textFieldSx}
                value={brandName}
                placeholder="Andreas Philipides Clothing Shop"
                onChange={(e) => setBrandName(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Socials</Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                sx={textFieldSx}
                placeholder="Facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                sx={textFieldSx}
                value={instagram}
                placeholder="Instagram"
                onChange={(e) => setInstagram(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1"> </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                sx={textFieldSx}
                value={linkedin}
                placeholder="LinkedIn"
                onChange={(e) => setlinkedin(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                sx={textFieldSx}
                value={tiktok}
                placeholder="Tiktok"
                onChange={(e) => setTikTok(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Address</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                sx={textFieldSx}
                value={address}
                placeholder="lorem ipsum detor.."
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Main Country</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <FormControl fullWidth>
                <InputLabel>Uk</InputLabel>
                <Select
                  labelId="country-label"
                  value={country}
                  onChange={(e) => setCountry(e.target.value as string)}
                  sx={textFieldSx}
                >
                  <MenuItem value="Lagos">Nigeria</MenuItem>
                  <MenuItem value="Bangladash">India</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Main City</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <FormControl fullWidth>
                <InputLabel>London</InputLabel>
                <Select
                  labelId="city-label"
                  value={city}
                  onChange={(e) => setCity(e.target.value as string)}
                  sx={textFieldSx}
                >
                  <MenuItem value="Lagos">Lagos</MenuItem>
                  <MenuItem value="Bangladash">Bangladash</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Category</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  labelId="category-label"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as string)}
                  sx={textFieldSx}
                >
                  <MenuItem value="Phone">Phone</MenuItem>
                  <MenuItem value="Laptop">Laptop</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default MyProfileSettings;
