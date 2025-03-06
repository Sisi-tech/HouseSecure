import React from 'react';
import { DownloadIcon } from '@heroicons/react/solid';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { flexDirection: 'column', padding: 20 },
    section: { margin: 2, padding: 2 },
    header: { fontSize: 14, marginBottom: 2 },
    content: { frontSize: 12 },
});

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>HomeSecure</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.header}>Homeowners Policy Application</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.content}>content here</Text>
            </View>
        </Page>
    </Document>
);

const PrintDoc = () => (
    <div>
        <PDFDownloadLink document={<MyDocument />} fileName='policy.pdf'>
            {({ blob, url, loading, error }) => 
                loading ? 'Loading document ...' : <button>
                    <DownloadIcon className='h-5 w-5' />
                </button>
            }
        </PDFDownloadLink>
    </div>
);

export default PrintDoc;


