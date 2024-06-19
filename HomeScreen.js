import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import JobCard from './JobCard';
import JobCardVertical from './JobCardVertical';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: 1, title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('./assets/facebook.png') },
    { id: 2, title: 'Data Scientist', company: 'Google', salary: '$160,000', location: 'San Francisco, CA', logo: require('./assets/google.png') },
    { id: 3, title: 'UX Designer', company: 'Apple', salary: '$150,000', location: 'Cupertino, CA', logo: require('./assets/appleLogo.png') },
    { id: 4, title: 'Backend Developer', company: 'Amazon', salary: '$140,000', location: 'Seattle, WA', logo: require('./assets/amazon.png') },
    { id: 5, title: 'DevOps Engineer', company: 'Netflix', salary: '$130,000', location: 'Los Gatos, CA', logo: require('./assets/netflix.png') },
    { id: 6, title: 'Frontend Developer', company: 'Microsoft', salary: '$120,000', location: 'Redmond, WA', logo: require('./assets/microsoft.png') },
    { id: 7, title: 'Mobile Developer', company: 'Spotify', salary: '$110,000', location: 'Stockholm, Sweden', logo: require('./assets/spotify.png') },
    { id: 8, title: 'Full Stack Developer', company: 'Instagram', salary: '$100,000', location: 'San Francisco, CA', logo: require('./assets/ig.png') },
  ];

  const popularJobs = [
    { id: 9, title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('./assets/burger.png') },
    { id: 10, title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('./assets/beats.png') },
    { id: 11, title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('./assets/facebook.png') },
    { id: 12, title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('./assets/burger.png') },
    { id: 13, title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('./assets/beats.png') },
    { id: 14, title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('./assets/facebook.png') },
    { id: 15, title: 'Backend Developer', company: 'Amazon', salary: '$74,000/y', location: 'Accra, Ghana', logo: require('./assets/amazon.png')},
    { id: 16, title: 'Frontend Developer', company: 'Instagram', salary: '$104,000/y', location: 'Kumasi, Ghana', logo: require('./assets/ig.png')}
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
        </View>
        <Image source={require('./assets/ronaldo.png')} style={styles.profileImage} />
      </View>

      <View style={styles.searchContainer}>
        <Image source={require('./assets/searchIcon.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
        <Image source={require('./assets/filterIcon.png')} style={styles.filterIcon} />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredJobsContainer}>
        {featuredJobs.map((job) => (
          <JobCard key={job.id} job={job} salaryColor="#fff" />
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView style={styles.popularJobsContainer}>
        {popularJobs.map((job) => (
          <JobCardVertical key={job.id} job={job} salaryColor="#000" />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  profileName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  profileEmail: {
    fontSize: 16,
    color: '#6B7280',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  filterIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0D26',
  },
  seeAll: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  featuredJobsContainer: {
    marginBottom: 20,
    paddingHorizontal: 5, 
  },
  popularJobsContainer: {
    flexGrow: 1,
    maxHeight: 400, 
  },
});

export default HomeScreen;
