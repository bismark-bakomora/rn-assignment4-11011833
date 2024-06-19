import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobCardVertical = ({ job }) => {
  return (
    <View style={styles.card}>
      <Image source={job.logo} style={styles.logo} />
      <View style={styles.details}>
        <View style={styles.header}>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.salary}>{job.salary}</Text>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.company}>{job.company}</Text>
          <Text style={styles.location}>{job.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  salary: {
    fontSize: 14,
    color: '#0D0D26',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  company: {
    fontSize: 14,
    color: '#6B7280',
  },
  location: {
    fontSize: 14,
    color: '#9CA3AF',
  },
});

export default JobCardVertical;
